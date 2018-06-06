// ng
import { Component, OnInit } from '@angular/core';
// npm
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
// store
import { IAuthState } from '@store/auth/auth.reducer';
import { getAuthCurrentUser } from '@app/store/auth/auth.selectors';
import { GetCurrentUserAction } from '@store/auth/auth.actions';
// models
import { IUser } from '@models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  currentUser$: Observable<IUser>;

  constructor(private store: Store<IAuthState>) {}

  ngOnInit(): void {
    // watch current user
    this.currentUser$ = this.store.select(getAuthCurrentUser);
    // try to get current authenticate user
    if (window.localStorage.getItem('token')) {
      this.store.dispatch(new GetCurrentUserAction());
    }
  }
  onLogout(event: MouseEvent): boolean {
    localStorage.removeItem('token');
    this.store.dispatch(new GetCurrentUserAction());
    event.preventDefault();
    return false;
  }
}
