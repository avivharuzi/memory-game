import { ChangeDetectionStrategy, Component } from '@angular/core';

import { GameStatus } from '@memory-game/data';
import { GameQuery } from '@memory-game/state';

@Component({
  selector: 'memory-game-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  status$ = this.gameQuery.status$;

  GameStatus = GameStatus;

  constructor(private gameQuery: GameQuery) {}
}
