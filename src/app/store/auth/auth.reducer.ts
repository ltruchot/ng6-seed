import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from './auth.actions';
import { IUser } from '@models/user.model';

export interface IAuthState {
  loading: boolean;
  currentUser: IUser;
  isLoggedIn: boolean;
  error: Error;
  type: string;
}

export const initialState: IAuthState = {
  loading: false,
  currentUser: null,
  isLoggedIn: false,
  error: null,
  type: '',
};

export function reducer(state = initialState, action: AuthActions): IAuthState {
  switch (action.type) {
    case AuthActionTypes.GetCurrentUser:
    case AuthActionTypes.Login: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type,
      };
    }
    case AuthActionTypes.LoginSuccess: {
      window.localStorage.setItem('token', action.payload);
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        error: null,
        type: action.type,
      };
    }
    case AuthActionTypes.GetCurrentUserSuccess: {
      return {
        ...state,
        currentUser: action.payload,
        isLoggedIn: true,
        loading: false,
        error: null,
        type: action.type,
      };
    }
    case AuthActionTypes.GetCurrentUserFail:
    case AuthActionTypes.LoginFail: {
      window.localStorage.removeItem('token');
      return {
        ...state,
        currentUser: null,
        isLoggedIn: false,
        loading: false,
        error: action.error,
        type: action.type,
      };
    }
    case AuthActionTypes.LogoutSuccess: {
      window.localStorage.removeItem('token');
      return {
        ...state,
        currentUser: null,
        isLoggedIn: false,
        loading: false,
        type: action.type,
      };
    }
    default:
      return state;
  }
}

// full state
export const selectAuth = createFeatureSelector<IAuthState>('auth');
// parts of state
export const selectAuthLoading = createSelector(
  selectAuth,
  (state: IAuthState) => state.loading,
);
// parts of state
export const selectAuthIsLoggedIn = createSelector(
  selectAuth,
  (state: IAuthState) => state.isLoggedIn,
);
// parts of state
export const selectAuthCurrentUser = createSelector(
  selectAuth,
  (state: IAuthState) => state.currentUser,
);
