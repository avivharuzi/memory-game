import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'memory-game-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultLayoutComponent {}
