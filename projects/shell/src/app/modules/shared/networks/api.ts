import { Injectable } from "@angular/core";
import { HttpParams, HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse, HttpRequest, HttpEvent } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from "projects/shell/src/environments/environment";
import { CookieControl } from "../utils/cookie-control";

@Injectable()
export class Api {

  responseType = {
    'blob': 'blob',
    'arraybuffer': 'arraybuffer',
    'json': 'json',
    'text': 'text',
    'none': ''
  };

  constructor(
    private http: HttpClient,
    private route: Router,
    private cookie: CookieControl
  ) {

  }

  get language () { return localStorage.getItem("lang") ?? ""; }

  /**
   * Lấy thông tin token từ cookie
   * @returns Token: string
   */
  getToken() {
    return  this.cookie.getToken;
  }

  /**
     * Get method
     * @param url
     */
  get(url: string) {
    let header = {
      'Content-Type': 'application/json'
    }
    return this.http
      .get(environment.apiUrl + url, this.optionsRequest(header, false))
      .pipe(catchError(this.handleError));
  }

  /**
   * Post method
   * @param url
   * @param data
   */
  post(url: string, data: any) {
    let header = {
      'Content-Type': 'application/json'
    }
    data = JSON.stringify(data);
    return this.http
      .post(environment.apiUrl + url, data, this.optionsRequest(header, false))
      .pipe(catchError(this.handleError));
  }

  /**
   * POST multipath
   * @param url
   * @param data
   */
  postMultiPart(url: string, data: FormData) {
    return this.http
      .post(environment.apiUrl + url, data, this.optionsRequest({}, false, 'blob'))
      .pipe(catchError(this.handleError));
  }

  /**
   * POST multipath
   * @param url
   * @param data
   */
  postMultiPartJSON(url: string, data: FormData) {
    return this.http
      .post(environment.apiUrl + url, data, this.optionsRequest())
      .pipe(catchError(this.handleError));
  }

  /**
   * Put method
   * @param url
   * @param data
   */
  put(url: string, data: string) {
    let header = {
      'Content-Type': 'application/json'
    }
    data = JSON.stringify(data);
    return this.http
      .put(environment.apiUrl + url, data, this.optionsRequest(header, false))
      .pipe(catchError(this.handleError));
  }

  /**
   * PUT multipart
   * @param url
   * @param data
   */
  putMultiPart(url: string, data: FormData) {
    return this.http
      .put(environment.apiUrl + url, data, this.optionsRequest())
      .pipe(catchError(this.handleError));
  }

  /**
   * Delete method
   * @param url
   */
  delete(url: string, param = '') {
    var token = this.getToken();

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ` + token,
        "Accept-Language": this.language
      }),
      body: JSON.stringify(param)
    };

    return this.http
      .delete(environment.apiUrl + url + url, options)
      .pipe(catchError(this.handleError));
  }

  optionsRequest(
    headers: any = {}, 
    reportProgress?: boolean, 
    responseType?: 'arraybuffer'|'blob'|'json'|'text'|'', 
    body: any = null) {
    let token = this.getToken();
    let header = {
      Authorization: token ? `Bearer ` + token : ``,
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      "Accept-Language": this.language,
      ...headers
    }
    let options: any = { headers: new HttpHeaders(header) };
    
    if (reportProgress == true) {
      options['reportProgress'] = true;
    }

    if (responseType != '' && responseType != null && responseType != undefined) {
      options['responseType'] = responseType;
    }

    if (body != null) {
      options['body'] = JSON.stringify(body);
    }
    
    return options;
  }

  /**
   * Handle Error
   * @param error 
   * @returns 
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error!.status}, ` + `body was: ${error!.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(() => error);
    // 'Something bad happened; please try again later.');
  }

}