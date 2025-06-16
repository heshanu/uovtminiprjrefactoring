import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceCall {

  private apiUrl = 'https://uovtminiprj-backend.vercel.app';

  constructor(private http: HttpClient) { }

  register(username: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    return this.http.post(
      `${this.apiUrl}/register`,
      { username, password },
      {
        headers,
        responseType: 'text'
      }
    );
  }

  login(username: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    return this.http.post(
      `${this.apiUrl}/login`,
      { username, password },
      {
        headers,
        responseType: 'text'
      }
    );
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  logout(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  isAuthenticated$(username: any, password: any): Observable<boolean> {
    // Temporary fix for current implementation
    const storedUser = localStorage.getItem('username');
    const storedPass = localStorage.getItem('password');

    // Compare both username AND password (not OR)
    const isValid = storedUser === username && storedPass === password;

    return of(isValid);
  }
}
