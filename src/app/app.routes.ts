import { Routes } from '@angular/router';
import { Parent } from './parent/parent';
import { Child } from './child/child';
import { App } from './app';
export const routes: Routes = [
  {
    path: 'parent',
    component: Parent,
  },
  { path: 'child/:name', component: Child },

  { path: '', redirectTo: 'parent', pathMatch: 'full' },
  { path: '**', redirectTo: 'parent' }
];
