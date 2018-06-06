// ng
import { Component, EventEmitter, Output } from '@angular/core';
// models
import { IUserAuth } from '@models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  @Output() login = new EventEmitter<IUserAuth>();
  user: { login: string; password: string } = {
    login: '',
    password: ''
  };
  constructor() {}
  onSubmit(formValue: IUserAuth, formValid: boolean): void {
    if (formValid) {
      this.login.emit(formValue);
    }
  }
}
