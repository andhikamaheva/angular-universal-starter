import { Component, OnInit, Inject } from '@angular/core';

import { AppStorage } from '@shared/for-storage/universal.inject';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';

import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html'
})
export class CityComponent implements OnInit {
  public result: any;
  public resultPost: any;

  constructor(private http: TransferHttpService,
    @Inject(AppStorage) private appStorage: Storage,
    @Inject('ORIGIN_URL') public baseUrl: string) {
    console.log(`ORIGIN_URL=${baseUrl}`);
  }

  ngOnInit(): void {
    let headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Accept-Language', 'en')
      .set('X-Qupas-App', 'mobile-web')
      .set('X-Qupas-App-Version', '0.5.5');
    this.http.get('http://api.staging.qupas.id/v1/cities', { headers: headers }).subscribe(result => {
      this.result = result;
    });
  }
}
