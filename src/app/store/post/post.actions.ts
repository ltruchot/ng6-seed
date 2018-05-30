// npm
import { Action } from '@ngrx/store';
// models
import { IPost } from '@models/test.model';

export enum PostActionTypes {
  LoadPosts = '[Post] Load Posts',
  LoadPostsSuccess = '[Post] Load Posts Success',
  LoadPostsFail = '[Post] Load Posts Fail',
}

export class LoadPosts implements Action {
  readonly type = PostActionTypes.LoadPosts;
  constructor() {}
}

export class LoadPostsSuccess implements Action {
  readonly type = PostActionTypes.LoadPostsSuccess;
  constructor(public payload: IPost[]) {}
}

export class LoadPostsFail implements Action {
  readonly type = PostActionTypes.LoadPostsFail;
  constructor(public payload: Error) {}
}

export type PostActions = LoadPosts | LoadPostsSuccess | LoadPostsFail;
