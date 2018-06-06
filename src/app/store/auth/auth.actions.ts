// npm
import { Action } from '@ngrx/store';
// models
import { IUser, IUserAuth } from '@models/user.model';

// register
export const REGISTER = '[Auth] Register';
export const REGISTER_SUCCESS = '[Auth] Register Success';
export const REGISTER_FAIL = '[Auth] Register Fail';
export class RegisterAction implements Action {
  readonly type = REGISTER;
  constructor(public payload: IUserAuth) {}
}
export class RegisterSuccessAction implements Action {
  readonly type = REGISTER_SUCCESS;
  constructor(public payload: string) {}
}
export class RegisterFailAction implements Action {
  readonly type = REGISTER_FAIL;
  constructor(public error: Error) {}
}

// login
export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAIL = '[Auth] Login Fail';
export class LoginAction implements Action {
  readonly type = LOGIN;
  constructor(public payload: IUserAuth) {}
}
export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: string) {}
}
export class LoginFailAction implements Action {
  readonly type = LOGIN_FAIL;
  constructor(public error: Error) {}
}

// login
export const REFRESH_TOKEN = '[Auth] Refresh Token';
export const REFRESH_TOKEN_SUCCESS = '[Auth] Refresh Token Success';
export const REFRESH_TOKEN_FAIL = '[Auth] Refresh Token Fail';
export class RefreshTokenAction implements Action {
  readonly type = REFRESH_TOKEN;
  constructor(public payload: string) {}
}
export class RefreshTokenSuccessAction implements Action {
  readonly type = REFRESH_TOKEN_SUCCESS;
  constructor(public payload: string) {}
}
export class RefreshTokenFailAction implements Action {
  readonly type = REFRESH_TOKEN_FAIL;
  constructor(public error: Error) {}
}

// user
export const GET_CURRENT_USER = '[Auth] Get Current User';
export const GET_CURRENT_USER_SUCCESS = '[Auth] Get Current User Success';
export const GET_CURRENT_USER_FAIL = '[Auth] Get Current User Fail';
export class GetCurrentUserAction implements Action {
  readonly type = GET_CURRENT_USER;
  constructor() {}
}
export class GetCurrentUserSuccessAction implements Action {
  readonly type = GET_CURRENT_USER_SUCCESS;
  constructor(public payload: IUser) {}
}
export class GetCurrentUserFailAction implements Action {
  readonly type = GET_CURRENT_USER_FAIL;
  constructor(public error: Error) {}
}

export type Actions =
  | RegisterAction
  | RegisterSuccessAction
  | RegisterFailAction
  | LoginAction
  | LoginSuccessAction
  | LoginFailAction
  | RefreshTokenAction
  | RefreshTokenSuccessAction
  | RefreshTokenFailAction
  | GetCurrentUserAction
  | GetCurrentUserSuccessAction
  | GetCurrentUserFailAction;
