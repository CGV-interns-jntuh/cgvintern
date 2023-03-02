import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InboundPutawayService {
  BASE_URL = 'http://170.249.89.98:5000/api';
  constructor(private httpClient: HttpClient) {
    // if (environment.API_BASE_URL) {
    //   var BASE_URL = environment.API_BASE_URL;
    // }
  }
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getItem(
    tallyNumber: any,
    item: any,
    Quantity: any,
    Type: any
  ): Observable<any> {
    return this.httpClient
      .post<any>('api/putaway/item', {
        tallyNumber,
        item,
        Quantity,
        Type,
      })
      .pipe(retry(1), catchError(this.httpError));
  }

  getLocation(tallyNumber: any, location: any): Observable<any> {
    return this.httpClient
      .post<any>('api/putaway/location', {
        tallyNumber,
        location,
      })
      .pipe(retry(1), catchError(this.httpError));
  }

  getData(
    tallyNumber: any,
    item: any,
    lot1: any,
    lot2: any,
    lot3: any,
    type: any,
    quantity: any,
    location: any
  ): Observable<any> {
    return this.httpClient
      .post<any>('api/putaway/data', {
        tallyNumber,
        location,
        lot1,
        lot2,
        lot3,
        quantity,
        type,
        item,
      })
      .pipe(retry(1), catchError(this.httpError));
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
    return throwError(msg);
  }
}
