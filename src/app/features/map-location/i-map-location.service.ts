import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IMapLocationService {
  constructor(private httpClient: HttpClient) {}
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getMapLocation(user: string): Observable<any> {
    return this.httpClient.get(
      `http://170.249.89.98:5200/api/mapLocation/read?user=${user}`
    );
  }

  createMapLocation(user: string): Observable<any> {
    return this.httpClient
      .post<any>('http://170.249.89.98:5200/api/mapLocation/create', { user })
      .pipe(retry(1), catchError(this.httpError));
  }
  updateMapLocation(user: string): Observable<any> {
    return this.httpClient
      .put<any>('http://170.249.89.98:5200/api/mapLocation/update', { user })
      .pipe(retry(1), catchError(this.httpError));
  }
  deleteMapLocation(user: string): Observable<any> {
    return this.httpClient.delete<any>(
      `http://170.249.89.98:5200/api/mapLocation/delete?
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
