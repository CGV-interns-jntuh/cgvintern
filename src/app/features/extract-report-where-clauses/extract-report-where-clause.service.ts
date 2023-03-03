import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtractReportWhereClauseService {

  constructor(private httpClient: HttpClient) { }
  deleteExtractReport(user: string): Observable<any> {
    return this.httpClient.delete<any>(
      `http://170.249.89.98:5200/api/extractreportwhere/delete?
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
