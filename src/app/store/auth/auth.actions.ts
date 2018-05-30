// npm
import { Action } from '@ngrx/store';
// models
import { IUserAuth, IUser } from '@models/user.model';

export enum AuthActionTypes {
  Register = '[Auth] Register',
  RegisterSuccess = '[Auth] Register Success',
  RegisterFail = '[Auth] Register Fail',
  GetCurrentUser = '[Auth] GetCurrentUser',
  GetCurrentUserSuccess = '[Auth] GetCurrentUser Success',
  GetCurrentUserFail = '[Auth] GetCurrentUser Fail',
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFail = '[Auth] Login Fail',
  Logout = '[Auth] Logout',
  LogoutSuccess = '[Auth] Logout Success',
  LogoutFail = '[Auth] Logout Fail',
}

export class Register implements Action {
  readonly type = AuthActionTypes.Register;
  constructor(public payload: IUserAuth) {}
}
export class RegisterSuccess implements Action {
  readonly type = AuthActionTypes.RegisterSuccess;
  constructor(public payload: string) {}
}
export class RegisterFail implements Action {
  readonly type = AuthActionTypes.RegisterFail;
  constructor(public error: Error) {}
}

export class GetCurrentUser implements Action {
  readonly type = AuthActionTypes.GetCurrentUser;
  constructor() {}
}
export class GetCurrentUserSuccess implements Action {
  readonly type = AuthActionTypes.GetCurrentUserSuccess;
  constructor(public payload: IUser) {}
}
export class GetCurrentUserFail implements Action {
  readonly type = AuthActionTypes.GetCurrentUserFail;
  constructor(public error: Error) {}
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: IUserAuth) {}
}
export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: string) {}
}
export class LoginFail implements Action {
  readonly type = AuthActionTypes.LoginFail;
  constructor(public error: Error) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
  constructor() {}
}
export class LogoutSuccess implements Action {
  readonly type = AuthActionTypes.LogoutSuccess;
  constructor() {}
}
export class LogoutFail implements Action {
  readonly type = AuthActionTypes.LogoutFail;
  constructor() {}
}

export type AuthActions =
  | Register
  | RegisterSuccess
  | RegisterFail
  | GetCurrentUser
  | GetCurrentUserSuccess
  | GetCurrentUserFail
  | Login
  | LoginSuccess
  | LoginFail
  | Logout
  | LogoutSuccess
  | LogoutFail;
