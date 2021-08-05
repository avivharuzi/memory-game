import { Route, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './default-layout/default-layout.component';

export const layoutComponents = {
  default: DefaultLayoutComponent,
};

export const loadLayout = (
  name: keyof typeof layoutComponents,
  children: Routes
): Route => {
  return {
    path: '',
    component: layoutComponents[name],
    children,
  };
};
