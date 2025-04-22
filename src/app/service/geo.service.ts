import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  private apiKey = '9e810578cc6d4d05998db59e812157a0';

  private apiUrl = 'https://api.opencagedata.com/geocode/v1/json';

  constructor(private http: HttpClient) { }

  getCoordinates(cityName: string): Observable<any> {
    const params = {
      q: cityName,
      key: this.apiKey
    };
    return this.http.get(this.apiUrl, { params });
  }
}
