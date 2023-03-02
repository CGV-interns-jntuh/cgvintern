import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // BASE_URL = 'http://localhost:4200/api';
  BASE_URL = 'http://170.249.89.98:5200/api';
  url = environment.API_BASE_URL;
  constructor(private httpClient: HttpClient) {}
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  Login(userData: any): Observable<any> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    
    // let user = { username: 'VREDDY', password: 'vk58gaw' };
    return this.httpClient
      .post(this.url+'/user/login', userData)
     // .pipe(
       // map((res: any) => res),
       
       // catchError(this.httpError)
     // ); 
  }

  httpError(error: any) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(() => new Error(msg));
  }
}
