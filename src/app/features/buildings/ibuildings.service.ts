import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IbuildingsService {
  constructor(private httpClient: HttpClient) {}
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getBuilding(user: string): Observable<any> {
    return this.httpClient.get(
      `http://170.249.89.98:5200/api/bucrud/read?user=${user}`
    );
  }

  createBuilding(user: any): Observable<any> {
    return this.httpClient
      .post<any>('/api/bucrud/create', {
        user,
      })
      .pipe(retry(1), catchError(this.httpError));
  }

  updateBuilding(user: any): Observable<any> {
    return this.httpClient
      .put<any>('/api/bucrud/update', {
        user,
      })
      .pipe(retry(1), catchError(this.httpError));
  }

  deleteBuilding(user: string): Observable<any> {
    return this.httpClient.delete(
      `http://170.249.89.98:5200/api/bucrud/delete?
      user=${user}`
    );
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
