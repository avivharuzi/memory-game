import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

import { Card } from '@memory-game/data';
import { GameQuery, GameService } from '@memory-game/state';

@Component({
  selector: 'memory-game-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent implements OnInit {
  matches$ = this.gameQuery.matchedCards$;
  countCards$ = this.gameQuery.countCards$;
  cardsAndLoading$ = combineLatest([
    this.gameQuery.loading$,
    this.gameQuery.cards$,
  ]);
  countTime$ = this.gameQuery.countTime$;

  constructor(private gameQuery: GameQuery, private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.start(100);
  }

  flipCard(card: Card): void {
    this.gameService.flipCard(card);
  }
}
