import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { Dramas } from './dramas/dramas';
import { AddDrama } from './add-drama/add-drama';
import { DramaDetail } from './drama-detail/drama-detail';
import { EditDrama } from './edit-drama/edit-drama';
import { DeleteDrama } from './delete-drama/delete-drama';

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
  path: 'drama-detail',
  component: DramaDetail
},
  {
    path: 'edit-drama',
    component: EditDrama
  },
  {
    path: 'delete-drama',
    component: DeleteDrama
  },
  {
    path: 'drama-detail/:name',
    component: DramaDetail
  },
  {
    path: 'edit-drama/:name',
    component: EditDrama
  }
];