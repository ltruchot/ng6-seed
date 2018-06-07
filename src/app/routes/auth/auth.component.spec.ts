// ng
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
// components
import { AuthComponent } from './auth.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { LoginComponent } from '@routes/auth/auth-form/login/login.component';
import { RegisterComponent } from '@routes/auth/auth-form/register/register.component';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared/shared.module';
// modules

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientModule, CoreModule],
      declarations: [
        AuthComponent,
        AuthFormComponent,
        LoginComponent,
        RegisterComponent,
      ],
      providers: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
