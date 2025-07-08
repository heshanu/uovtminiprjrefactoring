import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private http: HttpClient) {}

  private trainUrl = 'trainDetails.json';

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.trainUrl)
      .pipe(
        catchError(error => {
          console.error('Error fetching data', error);
          return throwError(() => error);
        })
      );
  }

}
