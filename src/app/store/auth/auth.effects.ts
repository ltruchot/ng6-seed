// ng
import { Injectable } from '@angular/core';
// npm
import { Actions, Effect } from '@ngrx/effects';
import { of as observableOf } from 'rxjs/observable/of';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';
// store
import { AuthStoreService } from './auth-store.service';
import * as authActions from './auth.actions';
// models
import { IUser, IUserAuth } from '@models/user.model';

@Injectable()
export class AuthEffects {
  // register a new user
  @Effect()
  register$ = this.actions$.ofType(authActions.REGISTER).pipe(
    map((action: authActions.RegisterAction) => action.payload),
    switchMap((user: IUserAuth) =>
      this.authStoreService.register(user).pipe(
        // If successful, dispatch success action with result
        switchMap((token: string) => [
          new authActions.RegisterSuccessAction(token),
          new authActions.GetCurrentUserAction()
        ]),
        // If request fails, dispatch failed action
        catchError((err: Error) =>
          observableOf(new authActions.RegisterFailAction(err))
        )
      )
    )
  );

  // log in an user
  @Effect()
  login$ = this.actions$.ofType(authActions.LOGIN).pipe(
    map((action: authActions.LoginAction) => action.payload),
    switchMap((user: IUserAuth) =>
      this.authStoreService.login(user).pipe(
        // If successful, dispatch success action with result
        switchMap((res: string) => [
          new authActions.LoginSuccessAction(res),
          new authActions.GetCurrentUserAction()
        ]),
        // If request fails, dispatch failed action
        catchError((err: Error) =>
          observableOf(new authActions.LoginFailAction(err))
        )
      )
    )
  );

  // refresh token of an user
  @Effect()
  refreshToken$ = this.actions$.ofType(authActions.REFRESH_TOKEN).pipe(
    map((action: authActions.RefreshTokenAction) => action.payload),
    switchMap((refreshToken: string) =>
      this.authStoreService.refreshToken(refreshToken).pipe(
        // If successful, dispatch success action with result
        switchMap((res: string) => [
          new authActions.RefreshTokenSuccessAction(res),
          new authActions.GetCurrentUserAction()
        ]),
        // If request fails, dispatch failed action
        catchError((err: Error) =>
          observableOf(new authActions.RefreshTokenFailAction(err))
        )
      )
    )
  );

  @Effect()
  user$ = this.actions$.ofType(authActions.GET_CURRENT_USER).pipe(
    switchMap(() =>
      this.authStoreService.user().pipe(
        // If successful, dispatch success action with result
        map((res: IUser) => {
          return new authActions.GetCurrentUserSuccessAction(res);
        }),
        // If request fails, dispatch failed action
        catchError((err: Error) =>
          observableOf(new authActions.GetCurrentUserFailAction(err))
        )
      )
    )
  );

  constructor(
    private authStoreService: AuthStoreService,
    private actions$: Actions
  ) {}
}
