import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable()
export class CityService {
    protected url = 'http://api.staging.qupas.id/v1/cities';

    constructor(
        protected http: HttpClient) { }

    public getData(params: any): Observable<any> {
        let headers = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Accept-Language', 'en')
            .set('X-Qupas-App', 'mobile-web')
            .set('X-Qupas-App-Version', '0.5.5');

        return this.http
            .get(this.url, { headers: headers });
    }
}
