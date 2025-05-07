import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceCall {

  private apiUrl = 'http://localhost:3000'; // URL of your Node.js server

  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, password });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  getAllUsers():Observable<any>{
    return this.http.get(`${this.apiUrl}/all`);
  }

  logout() {
    this.auth.logout({ 
      logoutParams: {
        returnTo: window.location.origin
      }
    });
  }

  get user$() {
    return this.auth.user$;
  }

  get isAuthenticated$() {
    return this.auth.isAuthenticated$;
  }

  getTokenSilently() {
    return this.auth.getAccessTokenSilently();
  }

  constructor(private http:HttpClient,public auth: AuthService) {}
}
