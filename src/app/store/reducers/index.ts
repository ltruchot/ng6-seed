import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@env/environment';
import * as fromPost from '../post/post.reducer';
import * as fromAuth from '../auth/auth.reducer';

export interface IState {
  post: fromPost.IPostState;
  auth: fromAuth.IAuthState;
}

export const reducers: ActionReducerMap<IState> = {
  post: fromPost.reducer,
  auth: fromAuth.reducer,
};

export const metaReducers: MetaReducer<IState>[] = !environment.production
  ? []
  : [];
