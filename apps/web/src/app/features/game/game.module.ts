import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ButtonModule,
  CardModule,
  ParagraphModule,
  ScoreboardModule,
} from '@memory-game/ui';

import { GameComponent } from './game.component';
import { GameRoutingModule } from './game-routing.module';

@NgModule({
  declarations: [GameComponent],
  imports: [
    ButtonModule,
    CardModule,
    CommonModule,
    GameRoutingModule,
    ParagraphModule,
    ScoreboardModule,
  ],
})
export class GameModule {}
