import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'memory-game-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() type: string;

  constructor() {
    this.type = 'button';
  }
}
