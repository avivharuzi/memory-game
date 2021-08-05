import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { GameQuery } from '@memory-game/state';

@Component({
  selector: 'memory-game-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusComponent {
  matchedCards$ = this.gameQuery.matchedCards$;
  countCards$ = this.gameQuery.countCards$;
  hasVictory$ = combineLatest([this.matchedCards$, this.countCards$]).pipe(
    map(([matchedCards, countCards]) => matchedCards === countCards)
  );

  constructor(private gameQuery: GameQuery) {}
}
