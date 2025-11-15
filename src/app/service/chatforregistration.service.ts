import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatforregistrationService {

   private apiUrl = 'http://127.0.0.1:5000/message';

  constructor(private http: HttpClient) { }

  sendMessage(userId: string, text: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { user_id: userId, text });
  }
}
