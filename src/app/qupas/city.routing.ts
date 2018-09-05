import { CityComponent } from './city.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
    path: '', component: CityComponent,
    data: {
      meta: {
        title: 'back-http.title',
        description: 'back-http.text'
      }
    },
  },
];

export const CityRoutes = RouterModule.forChild(routes);
