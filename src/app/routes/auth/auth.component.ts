// ng
import { Component, OnDestroy, OnInit } from '@angular/core';
// npm
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
// store
import { IAuthState } from '@store/auth/auth.reducer';
import { getAuthError, getAuthLoading } from '@store/auth/auth.selectors';
import { GetCurrentUserAction } from '@store/auth/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy, OnInit {
  authLoading$: Observable<boolean>;
  authError$: Observable<Error>;
  protected destroyed$: Subject<boolean> = new Subject();
  constructor(private store: Store<IAuthState>) {}

  ngOnInit(): void {
    // watch auth loading
    this.authLoading$ = this.store
      .select(getAuthLoading)
      .pipe(takeUntil(this.destroyed$));

    // watch auth errors
    this.authError$ = this.store
      .select(getAuthError)
      .pipe(takeUntil(this.destroyed$));

    // try to get current authenticate user
    if (window.localStorage.getItem('token')) {
      this.store.dispatch(new GetCurrentUserAction());
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
