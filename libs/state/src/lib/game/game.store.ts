import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

import { Card, GameStatus } from '@memory-game/data';

export interface GameState extends EntityState<Card, number> {
  status: GameStatus | null;
  countTime: number | null;
}

@Injectable({
  providedIn: 'root',
})
@StoreConfig({
  name: 'game',
})
export class GameStore extends EntityStore<GameState> {
  constructor() {
    super();
  }

  setCards(cards: Card[]): void {
    this.set(cards);
  }

  updateStatus(status: GameStatus): void {
    this.update({ status });
  }

  updateCountTime(countTime: number): void {
    this.update({ countTime });
  }

  updateFlipCard(id: number, isFlip: boolean = true): void {
    this.update(id, { isFlip });
  }

  updateMatchCard(id: number, hasMatch: boolean = true): void {
    this.update(id, { hasMatch });
  }
}
