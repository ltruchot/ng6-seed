// ng
import { Component, EventEmitter, Input, Output } from '@angular/core';
// models
import { IUser } from '@models/user.model';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent {
  @Output() logout = new EventEmitter();
  @Input() user: IUser;
  constructor() {}
  onSubmit(): void {
    this.logout.emit();
  }
}
