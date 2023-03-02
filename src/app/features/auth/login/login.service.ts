import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
 BASE_URL = 'http://localhost:4200/api';
  //BASE_URL = 'http://170.249.89.98:5000/api';
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
      .post(this.BASE_URL + '/user/login', userData, { headers: httpHeaders })
      // .pipe(
      //   map((res) => res),
      //   catchError(this.httpError)
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
