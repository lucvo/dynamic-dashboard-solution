import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PagedResult, ApiResponse } from '../responses';
import { BaseEntity } from '../models';


@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  constructor(
    private httpClient: HttpClient
  ) { }


  protected rootUrl: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  get<T>(query: string): Observable<ApiResponse<T>> {
    return this.httpClient
      .get<ApiResponse<T>>(`${this.rootUrl}/${query}`, this.httpOptions);
  }

  getPaging<T>(query: string): Observable<PagedResult<T>> {
    return this.httpClient
      .get<PagedResult<T>>(`${this.rootUrl}/${query}`, this.httpOptions);
  }

  post<TIn, TOut>(endPoint: string, item: TIn): Observable<ApiResponse<TOut>> {
    return this.httpClient.post<ApiResponse<TOut>>(`${this.rootUrl}/${endPoint}`, JSON.stringify(item), this.httpOptions);
  }

  put<TIn, TOut>(endPoint: string, item: TIn): Observable<ApiResponse<TOut>> {
    return this.httpClient.put<ApiResponse<TOut>>(`${this.rootUrl}/${endPoint}`, JSON.stringify(item), this.httpOptions);
  }

  putById<TIn extends BaseEntity, TOut>(endPoint: string, item: TIn): Observable<ApiResponse<TOut>> {
    if (endPoint) {
      return this.httpClient.put<ApiResponse<TOut>>(`${this.rootUrl}/${endPoint}/${item.id}`, JSON.stringify(item), this.httpOptions);
    }
    return this.httpClient.put<ApiResponse<TOut>>(`${this.rootUrl}/${item.id}`, JSON.stringify(item), this.httpOptions);
  }

  delete<TIn extends BaseEntity, TOut>(endPoint: string, item: TIn): Observable<ApiResponse<TOut>> {
    return this.httpClient.delete<ApiResponse<TOut>>(`${this.rootUrl}/${endPoint}/${item.id}`, this.httpOptions);
  }

  postWithOption<TIn, TOut>(endPoint: string, body: TIn, httpOptions: object): Observable<ApiResponse<TOut>> {
    var requestOption = { ...this.httpOptions, ...httpOptions };
    return this.httpClient.post<ApiResponse<TOut>>(`${this.rootUrl}/${endPoint}`, body, requestOption);
  }

  postWithHttpEventOption<TIn, TOut>(endPoint: string, item: TIn, httpOptions: object): Observable<HttpEvent<ApiResponse<TOut>>> {
    var requestOption = { ...this.httpOptions, ...httpOptions };
    return this.httpClient.post<HttpEvent<ApiResponse<TOut>>>(`${this.rootUrl}/${endPoint}`, item, requestOption);
  }

  request<TOut>(method: string, url: string, httpOptions: object): Observable<HttpResponse<TOut>> {
    var requestOption = { ...this.httpOptions, ...httpOptions };
    return this.httpClient.request<HttpResponse<TOut>>(method, url, requestOption);
  }

  requestWithApiResponse<TOut>(method: string, url: string, httpOptions: object): Observable<ApiResponse<TOut>> {
    return this.httpClient.request<ApiResponse<TOut>>(method, url, httpOptions);
  }

  requestWithHttpEvent<TOut>(req: HttpRequest<any>): Observable<HttpEvent<TOut>> {
    return this.httpClient.request<TOut>(req);
  }

  getWithParams<T>(query: string, params: HttpParams): Observable<ApiResponse<T>> {
    this.httpOptions = { ...this.httpOptions, ...{ params: params } };
    return this.httpClient
      .get<ApiResponse<T>>(`${this.rootUrl}/${query}`, this.httpOptions);
  }

}
