import { CityWithServiceComponent } from './city-with-service.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
    path: '', component: CityWithServiceComponent,
    data: {
      meta: {
        title: 'back-http.title',
        description: 'back-http.text'
      }
    },
  },
];

export const CityWithServiceRoutes = RouterModule.forChild(routes);
