import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@env/environment';
import * as fromPost from '../post/post.reducer';

export interface IState {
  post: fromPost.IPostState;
}

export const reducers: ActionReducerMap<IState> = {
  post: fromPost.reducer,
};

export const metaReducers: Array<MetaReducer<IState>> = !environment.production
  ? []
  : [];
