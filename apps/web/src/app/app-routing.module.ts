import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { loadLayout } from './core/layouts/load-layout';
import { StatusGuard } from './core/guards/status.guard';

const routes: Routes = [
  loadLayout('default', [
    {
      path: '',
      pathMatch: 'full',
      loadChildren: () =>
        import('./features/home/home.module').then((m) => m.HomeModule),
    },
    {
      path: 'game',
      loadChildren: () =>
        import('./features/game/game.module').then((m) => m.GameModule),
    },
    {
      path: 'status',
      canActivate: [StatusGuard],
      loadChildren: () =>
        import('./features/status/status.module').then((m) => m.StatusModule),
    },
    {
      path: '**',
      redirectTo: '',
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
