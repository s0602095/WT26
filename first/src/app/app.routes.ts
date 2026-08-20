import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { Dramas } from './dramas/dramas';
import { AddDrama } from './add-drama/add-drama';
import { Favoriten } from './favoriten/favoriten';
import { DramaDetail } from './drama-detail/drama-detail';

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
  },
  {
    path: 'drama-detail',
    component: DramaDetail
  }
];