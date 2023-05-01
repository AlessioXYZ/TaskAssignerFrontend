import {Injectable} from "@angular/core";
import {NetworkService} from "../network/network.service";
import {catchError, map, Observable, of} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class CanActivateToken {
  constructor(private networkService: NetworkService, private _router: Router) {

  }

  redirectToAuth() {
    this._router.navigate(['/auth']).then(r => r);
  }

  canActivate(): Observable<boolean> {
    if (localStorage.getItem('token')) {
      let params = {"token": localStorage.getItem('token') || ""};

      return this.networkService.get('check-token/', params).pipe(
        map((user) => {
          localStorage.setItem('user', JSON.stringify(user));

          return true;
        }),
        catchError((error) => {
          if (error.status === 500 || error.status === 504) {
            return of(true)
          } else {
            localStorage.removeItem('token');
            localStorage.removeItem('user');

            this.redirectToAuth();

            return of(false);
          }
        })
      );
    } else {
      this.redirectToAuth();

      return of(false);
    }

  }
}
