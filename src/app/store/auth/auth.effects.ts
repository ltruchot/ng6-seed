// ng
import { Injectable } from '@angular/core';
// npm
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
// store
import {
  Register,
  AuthActionTypes,
  RegisterSuccess,
  RegisterFail,
  GetCurrentUserSuccess,
  GetCurrentUserFail,
  GetCurrentUser,
  Login,
  LoginSuccess,
  LoginFail,
  LogoutSuccess,
} from './auth.actions';
// services
import { StoreAuthService } from '@app/store/auth/store-auth.service';
// models
import { IUserAuth, IUser } from '@models/user.model';

@Injectable()
export class AuthEffects {
  @Effect()
  register$ = this.actions$.ofType(AuthActionTypes.Register).pipe(
    map((action: Register) => action.payload),
    switchMap((user: IUserAuth) =>
      this._storeAuthService.register(user).pipe(
        // If successful, dispatch success action with result
        switchMap((token: string) => [
          new RegisterSuccess(token),
          new GetCurrentUser(),
        ]),
        // If request fails, dispatch failed action
        catchError((err: Error) => of(new RegisterFail(err))),
      ),
    ),
  );

  @Effect()
  getCurrentUser$ = this.actions$.ofType(AuthActionTypes.GetCurrentUser).pipe(
    switchMap(() =>
      this._storeAuthService.getCurrentUser().pipe(
        // If successful, dispatch success action with result
        map((res: IUser) => {
          return new GetCurrentUserSuccess(res);
        }),
        // If request fails, dispatch failed action
        catchError((err: Error) => of(new GetCurrentUserFail(err))),
      ),
    ),
  );

  @Effect()
  login$ = this.actions$.ofType(AuthActionTypes.Login).pipe(
    map((action: Login) => action.payload),
    switchMap((user: IUserAuth) =>
      this._storeAuthService.login(user).pipe(
        // If successful, dispatch success action with result
        switchMap((token: string) => [
          new LoginSuccess(token),
          new GetCurrentUser(),
        ]),
        // If request fails, dispatch failed action
        catchError((err: Error) => of(new LoginFail(err))),
      ),
    ),
  );

  @Effect()
  logout$ = this.actions$
    .ofType(AuthActionTypes.Logout)
    .pipe(switchMap(() => of(new LogoutSuccess())));

  constructor(
    private actions$: Actions,
    private _storeAuthService: StoreAuthService,
  ) {}
}
