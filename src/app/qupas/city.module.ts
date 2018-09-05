import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CityRoutes } from './city.routing';
import { CityComponent } from './city.component';

@NgModule({
  imports: [
    CommonModule,
    CityRoutes,
    TranslateModule
  ],
  declarations: [CityComponent]
})
export class CityModule { }
