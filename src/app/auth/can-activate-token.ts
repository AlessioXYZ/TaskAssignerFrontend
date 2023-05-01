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
      return this.networkService.get('check-token/').pipe(
        map((user) => {
          localStorage.setItem('user', JSON.stringify(user));

          return true;
        }),
        catchError((error) => {
          localStorage.removeItem('token');
          localStorage.removeItem('user');

          this.redirectToAuth();

          return of(false);
        })
      );
    } else {
      this._router.navigate(['/auth']).then(r => r);

      this.redirectToAuth();

      return of(false);
    }

  }
}