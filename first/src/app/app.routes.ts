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

  // Detailseite mit Drama-Namen
  {
    path: 'drama-detail/:name',
    component: DramaDetail
  },

  // Löschen mit Drama-Namen
  {
    path: 'delete-drama/:name',
    component: DeleteDrama
  },
  {
  path: 'edit-drama/:id',
  component: EditDrama
  }

];