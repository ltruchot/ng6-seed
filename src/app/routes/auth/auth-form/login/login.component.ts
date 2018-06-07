// ng
import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  @Output() login = new EventEmitter<NgForm>();
  constructor() {}
  onSubmit(formValue: NgForm, formValid: boolean, event: Event): void {
    event.preventDefault();
    if (formValid) {
      this.login.emit(formValue);
    }
  }
}
