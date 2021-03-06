import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

import { WrapperComponent } from '@shared/layouts/wrapper/wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: WrapperComponent, canActivateChild: [MetaGuard], children: [
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: 'mock', loadChildren: './mock-server-browser/mock-server-browser.module#MockServerBrowserModule' },
      { path: 'back', loadChildren: './transfer-back/transfer-back.module#TransferBackModule' },
      { path: 'static/back', loadChildren: './transfer-back/transfer-back.module#TransferBackModule' },
      { path: 'city', loadChildren: './qupas/city.module#CityModule' },
      { path: 'city-with-service', loadChildren: './qupas/city-with-service.module#CityWithServiceModule' },
      { path: '**', loadChildren: './not-found/not-found.module#NotFoundModule' },
    ]
  }
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
