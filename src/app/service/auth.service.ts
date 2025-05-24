import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceCall {

  private apiUrl = 'https://uovtminiprj-backend.vercel.app';

  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, password });
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

  isAuthenticated$(username:any,password:any): boolean {  
    if(localStorage.getItem('username')==username||localStorage.getItem('password')==password) {return true;}
    return false;
  }

  getTokenSilently() {
    return this.auth.getAccessTokenSilently();
  }

  constructor(private http:HttpClient,public auth: AuthService) {}
}
