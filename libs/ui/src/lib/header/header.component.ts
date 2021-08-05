import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'memory-game-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
