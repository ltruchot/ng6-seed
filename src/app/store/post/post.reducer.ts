// npm
import { createFeatureSelector, createSelector } from '@ngrx/store';
// store
import { PostActions, PostActionTypes } from '@store/post/post.actions';
// models
import { IPost } from '@models/test.model';

export interface IPostState {
  loading: boolean;
  all: IPost[];
  error: Error;
  type: string;
}

export const initialState: IPostState = {
  loading: false,
  all: [],
  error: null,
  type: '',
};

export function reducer(state = initialState, action: PostActions): IPostState {
  switch (action.type) {
    case PostActionTypes.LoadPosts: {
      return {
        ...state,
        loading: true,
        error: null,
        type: action.type,
      };
    }
    case PostActionTypes.LoadPostsSuccess: {
      return {
        ...state,
        all: action.payload,
        loading: false,
        error: null,
        type: action.type,
      };
    }
    case PostActionTypes.LoadPostsFail: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        type: action.type,
      };
    }

    default: {
      return state;
    }
  }
}

export const selectPost = createFeatureSelector<IPostState>('post');
export const selectPostAll = createSelector(
  selectPost,
  (state: IPostState) => state.all,
);
