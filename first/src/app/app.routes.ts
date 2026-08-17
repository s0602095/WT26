import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { Dramas } from './dramas/dramas';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dramas',
    component: Dramas
  }
];