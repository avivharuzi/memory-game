import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

import { Card, GameStatus } from '@memory-game/data';
import { createGameCards, timer } from '@memory-game/utils';

import { GameQuery } from './game.query';
import { GameStore } from './game.store';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private timerSubscription: Subscription | null;
  private endSubject: Subject<void>;

  constructor(private gameQuery: GameQuery, private gameStore: GameStore) {
    this.timerSubscription = null;
    this.endSubject = new Subject<void>();
  }

  get endGame$(): Observable<void> {
    return this.endSubject.asObservable();
  }

  start(maxCountTime: number): void {
    if (this.timerSubscription) {
      return;
    }

    this.reset();
    const cards = createGameCards(18);
    this.gameStore.setCards(cards);
    this.gameStore.updateStatus(GameStatus.Start);

    this.timerSubscription = timer(maxCountTime).subscribe({
      next: (countTime) => {
        this.gameStore.updateCountTime(countTime);
      },
      complete: () => {
        this.end();
      },
    });
  }

  end(): void {
    this.removeTimerSubscription();
    this.gameStore.update({ status: GameStatus.End });
    this.endSubject.next();
  }

  stop(): void {
    this.removeTimerSubscription();
    this.reset();
  }

  flipCard(card: Card): void {
    this.gameStore.updateFlipCard(card.id);
    const cardToCheck = this.gameQuery.getActive() as Card | null;

    if (cardToCheck) {
      if (cardToCheck.path === card.path) {
        this.gameStore.updateMatchCard(cardToCheck.id);
        this.gameStore.updateMatchCard(card.id);
        this.gameStore.setActive(null);
      } else {
        this.gameStore.setLoading(true);
        setTimeout(() => {
          this.gameStore.updateFlipCard(cardToCheck.id, false);
          this.gameStore.updateFlipCard(card.id, false);
          this.gameStore.setActive(null);
          this.gameStore.setLoading(false);
        }, 1000);
      }
    } else {
      this.gameStore.setActive(card.id);
    }

    if (this.gameQuery.hasVictory()) {
      this.end();
    }
  }

  private reset(): void {
    this.gameStore.reset();
  }

  private removeTimerSubscription(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }
  }
}
