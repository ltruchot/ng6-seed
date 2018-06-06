// ng
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
// components
import { AuthComponent } from './auth.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { LoginComponent } from '@routes/auth/auth-form/login/login.component';
import { RegisterComponent } from '@routes/auth/auth-form/register/register.component';
// modules
import { SharedModule } from '@app/shared/shared.module';
import { AppStoreModule } from '@store/app-store.module';
// services
import { ApiService } from '@app/core/services/api.service';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule,
          RouterTestingModule,
          SharedModule,
          AppStoreModule
        ],
        declarations: [
          AuthComponent,
          AuthFormComponent,
          LoginComponent,
          RegisterComponent
        ],
        providers: [ApiService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
