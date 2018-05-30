// ng
import { Component, OnInit } from '@angular/core';
// npm
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
// store
import { IPostState, selectPostAll } from '@app/store/post/post.reducer';
import { LoadPosts } from '@app/store/post/post.actions';
// models
import { IPost } from '@models/test.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public posts$: Observable<IPost[]>;

  constructor(private _store: Store<IPostState>) {}

  ngOnInit() {
    this.posts$ = this._store.select(selectPostAll);
  }

  dispachPosts() {
    this._store.dispatch(new LoadPosts());
  }
}
