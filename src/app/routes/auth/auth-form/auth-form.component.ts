// ng
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// npm
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
// store
import { IAuthState } from '@store/auth/auth.reducer';
import { LoginAction, RegisterAction } from '@store/auth/auth.actions';
// models
import { IUser, IUserAuth } from '@models/user.model';
import { getAuthCurrentUser } from '@store/auth/auth.selectors';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html'
})
export class AuthFormComponent implements OnDestroy, OnInit {
  currentUser: IUser;
  displayedForm: 'login' | 'register' = 'login';
  protected destroyed$: Subject<boolean> = new Subject();
  constructor(private store: Store<IAuthState>, private router: Router) {}

  ngOnInit(): void {
    // watch current user
    this.store
      .select(getAuthCurrentUser)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data: IUser) => {
        this.currentUser = data;
        if (data) {
          this.router.navigate(['home']);
        }
      });
  }

  onLogin(user: IUserAuth): void {
    this.store.dispatch(new LoginAction(user));
  }

  onRegister(user: IUserAuth): void {
    this.store.dispatch(new RegisterAction(user));
  }
  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
