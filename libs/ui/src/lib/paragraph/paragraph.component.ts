import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'memory-game-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParagraphComponent {}
