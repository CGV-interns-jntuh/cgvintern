import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorerServiceService {

  url = environment.API_BASE_URL;
 // BASE_URL = 'http://170.249.89.98:5200/api';
 // BASE_URL = 'http://localhost:5200/api';
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

  getAll(user: string): Observable<any> {
    return this.httpClient.get(
      this.url+`/storercontact/read?user=${user}`
    );
  }

  updateStorerContact(
    Consignee: any,
    cellPhone: any,
    contactName: any,
    contactType: any,
    emailAddress: any,
    emailFormat: any,
    faxNumber: any,
    statusCode: any,
    telePhone: any,
    user: any
  ): Observable<any> {
    return this.httpClient
      .put<any>(this.url+'/storercontact/update', {
        Consignee,
        cellPhone,
        contactName,
        contactType,
        emailAddress,
        emailFormat,
        faxNumber,
        statusCode,
        telePhone,
        user,
      })
      .pipe(retry(1), catchError(this.httpError));
  }

  storerCreate(
    Consignee: any,
    cellPhone: any,
    contactName: any,
    contactType: any,
    emailAddress: any,
    emailFormat: any,
    faxNumber: any,
    statusCode: any,
    telePhone: any,
    user: any
  ): Observable<any> {
    
    return this.httpClient
   
      .post<any>(this.url+'/storercontact/create', {
        Consignee,
        cellPhone,
        contactName,
        contactType,
        emailAddress,
        emailFormat,
        faxNumber,
        statusCode,
        telePhone,
        user,
      })
      .pipe(retry(1), catchError(this.httpError));
  }

  storerContactUpdate(
    Consignee: any,
    cellPhone: any,
    contactName: any,
    contactType: any,
    emailAddress: any,
    emailFormat: any,
    faxNumber: any,
    statusCode: any,
    telePhone: any,
    user: any
  ): Observable<any> {
    return this.httpClient
      .put<any>(this.url+'/storercontact/update', {
        Consignee,
        cellPhone,
        contactName,
        contactType,
        emailAddress,
        emailFormat,
        faxNumber,
        statusCode,
        telePhone,
        user,
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
    return throwError(() => new Error(msg));
  }
 


}
