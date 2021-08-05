import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule, ParagraphModule } from '@memory-game/ui';

import { StatusComponent } from './status.component';
import { StatusRoutingModule } from './status-routing.module';

@NgModule({
  declarations: [StatusComponent],
  imports: [ButtonModule, CommonModule, ParagraphModule, StatusRoutingModule],
})
export class StatusModule {}
