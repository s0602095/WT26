import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { Dramas } from './dramas/dramas';
import { AddDrama } from './add-drama/add-drama';
import { Favoriten } from './favoriten/favoriten';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dramas',
    component: Dramas
  },
  {
    path: 'add-drama',
    component: AddDrama
  },
  {
    path: 'favoriten',
    component: Favoriten
  }
];