import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderModule } from '@memory-game/ui';

import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';

@NgModule({
  declarations: [DefaultLayoutComponent],
  imports: [CommonModule, HeaderModule, RouterModule],
})
export class CoreModule {}
