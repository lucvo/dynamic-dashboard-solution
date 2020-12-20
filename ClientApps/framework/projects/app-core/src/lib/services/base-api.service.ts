import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponse, ApiResponse } from '../responses';
import { IEntity } from '../models';


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
  
  list<T>(query: string,  params: HttpParams): Observable<ListResponse<T>> {
    this.httpOptions = { ...this.httpOptions, ...{ params: params } };
    return this.httpClient
      .get<ListResponse<T>>(`${this.rootUrl}/${query}`, this.httpOptions);
  }

  get<T>(query: string): Observable<ApiResponse<T>> {
    return this.httpClient
      .get<ApiResponse<T>>(`${this.rootUrl}/${query}`, this.httpOptions);
  }

  post<TIn, TOut>(endPoint: string, item: TIn): Observable<ApiResponse<TOut>> {
    return this.httpClient.post<ApiResponse<TOut>>(`${this.rootUrl}/${endPoint}`, JSON.stringify(item), this.httpOptions);
  }

  put<TIn, TOut>(endPoint: string, item: TIn): Observable<ApiResponse<TOut>> {
    return this.httpClient.put<ApiResponse<TOut>>(`${this.rootUrl}/${endPoint}`, JSON.stringify(item), this.httpOptions);
  }

  delete<TIn extends IEntity, TOut>(endPoint: string, item: TIn): Observable<ApiResponse<TOut>> {
    return this.httpClient.delete<ApiResponse<TOut>>(`${this.rootUrl}/${endPoint}/${item.id}`, this.httpOptions);
  }

  request<TOut>(method: string, url: string, httpOptions: object): Observable<HttpResponse<TOut>> {
    var requestOption = { ...this.httpOptions, ...httpOptions };
    return this.httpClient.request<HttpResponse<TOut>>(method, url, requestOption);
  }
}
