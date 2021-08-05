import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'memory-game-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() imgSrc: string;

  constructor() {
    this.imgSrc = '';
  }
}
