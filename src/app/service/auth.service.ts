import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceCall {

  private apiUrl = 'https://uovtminiprj-backend.vercel.app';

  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, password });
  }

  login(username: string, password: string): Observable<any> {
    const body = {
      username: username,
      password: password
    };
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
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

  get isAuthenticated$(): boolean {
    
    if(localStorage.getItem('username')=="test"||localStorage.getItem('password')=='test') {return true;}
    return false;
  }

  getTokenSilently() {
    return this.auth.getAccessTokenSilently();
  }

  constructor(private http:HttpClient,public auth: AuthService) {}
}
