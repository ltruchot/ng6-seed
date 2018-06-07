// ng
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// npm
import { Subject } from 'rxjs';
import { takeUntil, switchMap, tap, finalize } from 'rxjs/operators';
// services
import { ApiService } from '@app/core/services/api.service';
// models
import { IUser } from '@models/user.model';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
})
export class AuthFormComponent implements OnDestroy, OnInit {
  public loading = true;
  public currentUser: IUser;
  public displayedForm: 'login' | 'register' = 'login';
  protected destroyed$: Subject<boolean> = new Subject();
  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    // check user
    this._apiService
      .get({ url: 'user', auth: true })
      .pipe(
        tap((data: IUser) => (this.currentUser = data)),
        finalize(() => (this.loading = false)),
        takeUntil(this.destroyed$),
      )
      .subscribe();
  }

  onLogin(user: NgForm): void {
    this._apiService
      .post({ url: 'login', body: user })
      .pipe(
        switchMap((token: any) => {
          window.localStorage.setItem('token', token);
          return this._apiService.get({ url: 'user', auth: true }).pipe(
            tap((data: IUser) => (this.currentUser = data)),
            takeUntil(this.destroyed$),
          );
        }),
        takeUntil(this.destroyed$),
      )
      .subscribe();
  }

  onRegister(user: NgForm): void {
    this._apiService
      .post({ url: 'user', body: user })
      .pipe(
        switchMap((token: any) => {
          window.localStorage.setItem('token', token);
          return this._apiService.get({ url: 'user', auth: true }).pipe(
            tap((data: IUser) => (this.currentUser = data)),
            takeUntil(this.destroyed$),
          );
        }),
        takeUntil(this.destroyed$),
      )
      .subscribe();
  }

  onLogout(): void {
    this.currentUser = null;
    window.localStorage.removeItem('token');
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
