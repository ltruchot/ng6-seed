// ng
import { Component, OnDestroy, OnInit } from '@angular/core';
// npm
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
// models
import { IUser, IUserAuth } from '@models/user.model';
import { Store } from '@ngrx/store';
import {
  IAuthState,
  selectAuthCurrentUser,
  selectAuthLoading,
} from '@app/store/auth/auth.reducer';
import {
  Register,
  GetCurrentUser,
  Login,
  Logout,
} from '@app/store/auth/auth.actions';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
})
export class AuthFormComponent implements OnDestroy, OnInit {
  public loading$: Observable<boolean>;
  public currentUser$: Observable<IUser>;
  public displayedForm: 'login' | 'register' = 'login';
  protected destroyed$: Subject<boolean> = new Subject();
  constructor(private _store: Store<IAuthState>) {}

  ngOnInit(): void {
    // watch user
    this.currentUser$ = this._store
      .select(selectAuthCurrentUser)
      .pipe(takeUntil(this.destroyed$));
    // watch loading
    this.loading$ = this._store
      .select(selectAuthLoading)
      .pipe(takeUntil(this.destroyed$));

    // check user
    this._store.dispatch(new GetCurrentUser());
  }

  onLogin(user: IUserAuth): void {
    this._store.dispatch(new Login(user));
  }

  onRegister(user: IUserAuth): void {
    this._store.dispatch(new Register(user));
  }

  onLogout(): void {
    this._store.dispatch(new Logout());
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
