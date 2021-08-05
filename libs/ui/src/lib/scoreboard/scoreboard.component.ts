import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'memory-game-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreboardComponent {}
