import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IheaderService {
  url = environment.API_BASE_URL;
  // BASE_URL = 'http://170.249.89.98:5200/api';
  constructor(private httpClient: HttpClient) {
  console.log(this.url)

    // if (environment.API_BASE_URL) {
    //   var BASE_URL = environment.API_BASE_URL;
    // }
  }
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAll(user: string, building: number): Observable<any> {
    return this.httpClient.get(
      this.url+`/ihcrud/read?user=${user}&building=${building}`
    );
  }

  getPosts(user: string, tally: number): Observable<any> {
    return this.httpClient.get(
      this.url+`/ihcrud/tallypostings?user=${user}&tally=${tally}`
    );
  }

  getTallyInquiry(tally: number): Observable<any> {
    return this.httpClient.get(
      this.url+`/ihcrud/inquiry?query=iputtagunt&tallyNumber=${tally}`
    );
  }

  getByTally(user: string, tally: any): Observable<any> {
    console.log(tally);
    console.log(tally);
    return this.httpClient.get(
      this.url+`/ihcrud/read/tally?user=${user}&tally=${tally}`
    );
  }

  getComment(tally: number): Observable<any> {
    return this.httpClient.get(
      this.url+`/ihcrud/comments?query=iputtagunt&tallyNumber=${tally}`
    );
  }

  getTallyDetailComment(tally: number): Observable<any> {
    return this.httpClient.get(
       this.url+`/ihcrud/tallyDetailComments?query=iputtagunt&tallyNumber=${tally}`
    );
  }

  getAccountSelection(user:string): Observable<any> {
    return this.httpClient.get(
       this.url+`/account/read?userName=${user}`
    );
  }

  createTallyDetail1(user: any): Observable<any> {
    const createUrl = this.url+`/ihcrud/createTallyDetail` 
    return this.httpClient
      .post<any>(createUrl, { user })
      .pipe(retry(1), catchError(this.httpError));
  }

  createTallyDetail(
    quantity: any,
    item: any,
    lotCode1: any,
    lotCode2: any,
    lotCode3: any,
    rateType: any,
    dmgReas: any,
    overrideWeight: any,
    tally: any,
    user: any,
    
  ): Observable<any> {
    return this.httpClient
      .post<any>(this.url+'/ihcrud/createTallyDetail', {
        quantity,
        item,
        lotCode1,
        lotCode2,
        lotCode3,
        rateType,
        dmgReas,
        overrideWeight,
        tally,
        user
      })
      .pipe(retry(1), catchError(this.httpError));
  }

  createTally(
    storer: any,
    storerRef: any,
   
    loadType: any,
    recptType: any,
    recvdFrom: any,
    qty: any,
    schdldArrival: any,
    carrier: any,
    actualArrival: any,
    building: any,
    pro: any,
    wgt: any,
    user: any,
    schdldtime: any,
    actualtime: any,
    authorization: any,
    car: any,
    seal1: any,
    seal2: any,
    invoiceDate: any,
    returnValue: any,
    broken1: any,
    broken2: any,
    specialCharge: any,
    notification:any,
    chargeType:any,
    billTo:any,
  ): Observable<any> {
    return this.httpClient
      .post<any>(this.url+'/ihcrud/create', {
        storer,
        storerRef,
        loadType,
        recptType,
        recvdFrom,
        qty,
        schdldArrival,
        carrier,
        actualArrival,
        building,
        pro,
        wgt,
        user,
        schdldtime,
        actualtime,
        authorization,
        car,
        seal1,
        seal2,
        invoiceDate,
        returnValue,
        broken1,
        broken2,
        specialCharge,
        notification,
        chargeType,
        billTo
      })
      .pipe(retry(1), catchError(this.httpError));
  }

  updateTally(
    
    storer: any,
    storerRef: any,
    loadType: any,
    recptType: any,
    recvdFrom: any,
    qty: any,
    schdldArrival: any,
    carrier: any,
    actualArrival: any,
    building: any,
    pro: any,
    wgt: any,
    user: any,
    schdldtime: any,
    actualtime: any,
    authorization: any,
    car: any,
    seal1: any,
    seal2: any,
    invoiceDate: any,
    returnValue: any,
    broken1: any,
    broken2: any,
    specialCharge: any,
    notification:any,
    chargeType:any,
    billTo:any,
    tally: any,
  ): Observable<any> {
    return this.httpClient
      .put<any>(this.url+'/ihcrud/update', {
        storer,
        storerRef,
        loadType,
        recptType,
        recvdFrom,
        qty,
        schdldArrival,
        carrier,
        actualArrival,
        building,
        pro,
        wgt,
        user,
        schdldtime,
        actualtime,
        authorization,
        car,
        seal1,
        seal2,
        invoiceDate,
        returnValue,
        broken1,
        broken2,
        specialCharge,
        notification,
        chargeType,
        billTo,
        tally,
        
      })
      .pipe(retry(1), catchError(this.httpError));
  }

  createtallyDetail2(
    tally: any,
    storer: any,
    storerRef: any,
    qty: any,
    loadType: any,
    recptType: any,
    recvdFrom: any,
    schdldArrival: any,
    actualArrival: any,
    schdldtime: any,
    actualtime: any,
    carrier: any,
    pro: any,
    wgt: any,
    building: any,
    user: any
  ): Observable<any> {
    return this.httpClient
      .put<any>('api/ihcrud/update', {
        tally,
        storer,
        storerRef,
        loadType,
        recptType,
        recvdFrom,
        qty,
        schdldArrival,
        carrier,
        actualArrival,
        building,
        pro,
        wgt,
        schdldtime,
        actualtime,
        user,
      })
      .pipe(retry(1), catchError(this.httpError));
  }

  deleteTally(tally: any, user: any): Observable<any> {
    return this.httpClient
      .delete<any>(this.url+`/ihcrud/delete?user=${user}&tally=${tally}`)
      .pipe(retry(1), catchError(this.httpError));
  }

  getTallyHeaders(): Observable<any> {
    return this.httpClient
      .get<any>('api/ihcrud/read')
      .pipe(retry(1), catchError(this.httpError));
  }

  // createTally().Observable<any>{
  //   return this.httpClient.post<any>('api/ihcrud/create')
  // }

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
