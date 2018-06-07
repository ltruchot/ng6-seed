// ng
import { Injectable } from '@angular/core';
// npm
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
// store
import {
  PostActionTypes,
  LoadPostsSuccess,
  LoadPostsFail,
} from '@store/post/post.actions';
import { StorePostService } from '@app/store/post/store-post.service';
// models
import { IPost } from '@models/test.model';

@Injectable()
export class PostEffects {
  @Effect()
  effect$ = this.actions$.ofType(PostActionTypes.LoadPosts).pipe(
    switchMap(() =>
      this._storePostService.getPosts().pipe(
        // If successful, dispatch success action with result
        map((res: IPost[]) => {
          return new LoadPostsSuccess(res);
        }),
        // If request fails, dispatch failed action
        catchError((err: Error) => of(new LoadPostsFail(err))),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private _storePostService: StorePostService,
  ) {}
}
