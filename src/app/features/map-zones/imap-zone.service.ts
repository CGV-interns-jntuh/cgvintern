import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ImapZoneService {
  constructor(private httpClient: HttpClient) {}
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getMapZone(user: string): Observable<any> {
    return this.httpClient.get(
      `http://170.249.89.98:5200/api/mapZone/read?user=${user}`
    );
  }

  createMapZone(user: string): Observable<any> {
    return this.httpClient
      .post<any>('http://170.249.89.98:5200/api/mapZone/create', { user })
      .pipe(retry(1), catchError(this.httpError));
  }
  updateMapZone(user: string): Observable<any> {
    return this.httpClient
      .put<any>('http://170.249.89.98:5200/api/mapZone/update', { user })
      .pipe(retry(1), catchError(this.httpError));
  }
  deleteMapZone(user: string): Observable<any> {
    return this.httpClient.delete<any>(
      `http://170.249.89.98:5200/api/mapZone/delete?
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
