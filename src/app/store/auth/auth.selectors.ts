// npm
import { createFeatureSelector, createSelector } from '@ngrx/store';
// store
import * as fromAuth from './auth.reducer';

// full state
export const getAuthState = createFeatureSelector<fromAuth.IAuthState>('auth');
// parts of state
export const getAuthLoading = createSelector(getAuthState, fromAuth.loading);
export const getAuthError = createSelector(getAuthState, fromAuth.error);
export const getAuthCurrentUser = createSelector(
  getAuthState,
  fromAuth.currentUser
);
export const getAuthIsLoggedIn = createSelector(
  getAuthState,
  fromAuth.isLoggedIn
);
