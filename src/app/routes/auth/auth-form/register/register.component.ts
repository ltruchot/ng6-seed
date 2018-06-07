// ng
import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  @Output() register = new EventEmitter<NgForm>();
  constructor() {}
  onSubmit(formValue: NgForm, formValid: boolean, event: Event): void {
    event.preventDefault();
    if (formValid) {
      this.register.emit(formValue);
    }
  }
}
