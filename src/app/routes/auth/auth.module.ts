// ng
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// modules
import { SharedModule } from '@shared/shared.module';
// component
import { AuthComponent } from './auth.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { LoginComponent } from './auth-form/login/login.component';
import { RegisterComponent } from './auth-form/register/register.component';

const routes = [{ path: '', component: AuthComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [AuthFormComponent],
  declarations: [
    AuthComponent,
    AuthFormComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule {}
