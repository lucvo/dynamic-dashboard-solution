import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError, ReplaySubject, EMPTY } from 'rxjs';
import { catchError, map, finalize } from 'rxjs/operators';
import { AuthService, TokenService } from '../auth';

@Injectable()
export class CoreInterceptor implements HttpInterceptor {
  // tslint:disable-next-line: variable-name
  private _pendingRequests = 0;
  // tslint:disable-next-line: variable-name
  private _pendingRequestsStatus: ReplaySubject<boolean> = new ReplaySubject<boolean>();
  constructor(
    private authService: AuthService,
    private tokenService: TokenService) { }

  get pendingRequestsStatus(): Observable<boolean> {
    return this._pendingRequestsStatus.asObservable();
  }

  get pendingRequests(): number {
    return this._pendingRequests;
  }


  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const hideProgress = req.headers.has('hide-progress') && req.headers.get('hide-progress') === 'true';

    if (!hideProgress) {
      this._pendingRequests++;
      if (1 === this._pendingRequests) {
        setTimeout(() => {
          this._pendingRequestsStatus.next(true);
        });
      }
    }

    let handleError = true;
    const accessToken = this.tokenService.getToken();
    if (accessToken) {
      handleError = !req.headers.has('handle-error') || req.headers.get('handle-error') === 'true';

      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
          Expires: 'Thu, 01 Jan 1970 00:00:00 GMT',
          'If-Modified-Since': '0'
        }
      });
    }

    return next.handle(req).pipe(
      map(event => {
        return event;
      }),
      catchError(error => {
        if (error.status === 401) {
          this.authService.login();
          return EMPTY;
        }
        return throwError(error);
      }),
      finalize(() => {
        if (!hideProgress) {
          this._pendingRequests--;

          if (0 === this._pendingRequests) {
            setTimeout(() => {
              this._pendingRequestsStatus.next(false);
            });
          }
        }
      })
    );
  }
}
