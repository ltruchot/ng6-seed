// ng
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
// npm
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
// store
import { IAuthState } from '@store/auth/auth.reducer';
import { getAuthIsLoggedIn } from '@store/auth/auth.selectors';

@Injectable()
export class AuthGuard implements CanActivate {
  isLoggedIn$: Observable<boolean>;
  constructor(private store: Store<IAuthState>, private router: Router) {}
  canActivate(
    _next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<boolean> {
    // redirect to sign in page if user is not authenticated
    this.isLoggedIn$ = this.store.select(getAuthIsLoggedIn);
    this.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
      if (!isLoggedIn) {
        this.router.navigate(['auth']);
      }
    });

    return this.isLoggedIn$;
  }
}
