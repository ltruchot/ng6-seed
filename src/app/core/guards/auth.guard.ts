import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAuthState, selectAuthIsLoggedIn } from '@app/store/auth/auth.reducer';
import { tap } from 'rxjs/operators';

// TO DO : test the auth guard function

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private isLoggedIn$: Observable<boolean>;
  constructor(private _store: Store<IAuthState>, private _router: Router) {}

  canActivate(
    _next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.isLoggedIn$ = this._store.select(selectAuthIsLoggedIn).pipe(
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          this._router.navigate(['/auth']);
        }
      }),
    );
    this.isLoggedIn$.subscribe();
    return this.isLoggedIn$;
  }
}
