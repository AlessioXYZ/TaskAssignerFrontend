import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, tap, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = localStorage.getItem('token');

    request = request.clone({
      setHeaders: {
        Authorization: `Token ${token}`
      }
    });

    return next.handle(request).pipe(tap({
        next: () => {},
        error: (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status !== 401) {
              return;
            }
            this._router.navigate(['auth']).then(r => {});
          }
        },
      }),
    );
  }


}
