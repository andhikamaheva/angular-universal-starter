import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CityWithServiceRoutes } from './city-with-service.routing';
import { CityWithServiceComponent } from './city-with-service.component';

@NgModule({
  imports: [
    CommonModule,
    CityWithServiceRoutes,
    TranslateModule
  ],
  declarations: [CityWithServiceComponent]
})
export class CityWithServiceModule { }
