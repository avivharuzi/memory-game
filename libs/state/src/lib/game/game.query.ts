import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { QueryEntity } from '@datorama/akita';

import { GameState, GameStore } from './game.store';

@Injectable({
  providedIn: 'root',
})
export class GameQuery extends QueryEntity<GameState> {
  countCards$ = this.selectCount().pipe(map((count) => count / 2));
  matchedCards$ = this.selectCount(({ hasMatch }) => hasMatch).pipe(
    map((count) => count / 2)
  );
  cards$ = this.selectAll();
  loading$ = this.selectLoading();
  countTime$ = this.select((state) => state.countTime);
  status$ = this.select((state) => state.status);

  constructor(protected gameStore: GameStore) {
    super(gameStore);
  }

  hasVictory(): boolean {
    return this.getCount() === this.getCount(({ hasMatch }) => hasMatch);
  }
}
