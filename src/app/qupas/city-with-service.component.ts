import { Component, OnInit, Inject } from '@angular/core';

import { AppStorage } from '@shared/for-storage/universal.inject';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-city-with-service',
  templateUrl: './city-with-service.component.html'
})
export class CityWithServiceComponent implements OnInit {
  public result: any;
  public resultPost: any;

  constructor(
    public cityService: CityService,
    @Inject(AppStorage) private appStorage: Storage,
    @Inject('ORIGIN_URL') public baseUrl: string) {
    console.log(`ORIGIN_URL=${baseUrl}`);
  }

  ngOnInit(): void {
    this.cityService.getData({})
      .subscribe(result => {
        this.result = result;
      });
  }
}
