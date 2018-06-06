// ng
import { Component, EventEmitter, Output } from '@angular/core';
// models
import { IUserAuth } from '@models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  @Output() register = new EventEmitter<IUserAuth>();
  user: IUserAuth = {
    login: '',
    email: '',
    password: ''
  };
  constructor() {}
  onSubmit(formValue: IUserAuth, formValid: boolean, event: Event): boolean {
    if (formValid) {
      this.register.emit(formValue);
    }
    event.preventDefault();
    return false;
  }
}
