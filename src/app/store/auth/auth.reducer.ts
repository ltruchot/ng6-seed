// models
import { IUser } from '@models/user.model';
// store
import * as auth from './auth.actions';

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
  type: ''
};

export function reducer(
  state: IAuthState = initialState,
  action: auth.Actions
): IAuthState {
  switch (action.type) {
    case auth.LOGIN:
    case auth.REGISTER:
    case auth.GET_CURRENT_USER:
    case auth.REFRESH_TOKEN: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type
      };
    }
    case auth.LOGIN_SUCCESS:
    case auth.REGISTER_SUCCESS:
    case auth.REFRESH_TOKEN_SUCCESS: {
      window.localStorage.setItem('token', action.payload);
      return {
        ...state,
        loading: false,
        error: null,
        type: action.type
      };
    }
    case auth.GET_CURRENT_USER_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload,
        isLoggedIn: true,
        loading: false,
        error: null,
        type: action.type
      };
    }
    case auth.LOGIN_FAIL:
    case auth.REGISTER_FAIL:
    case auth.GET_CURRENT_USER_FAIL:
    case auth.REFRESH_TOKEN_FAIL: {
      window.localStorage.removeItem('token');
      console.log('error', action);
      return {
        ...state,
        currentUser: null,
        isLoggedIn: false,
        loading: false,
        error: action.error,
        type: action.type
      };
    }

    default: {
      return state;
    }
  }
}

export const loading = (state: IAuthState) => state.loading;
export const error = (state: IAuthState) => state.error;
export const currentUser = (state: IAuthState) => state.currentUser;
export const isLoggedIn = (state: IAuthState) => state.isLoggedIn;
