// ng
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// modules
import { AppStoreModule } from '@store/app-store.module';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@app/shared/shared.module';
// components
import { AuthFormComponent } from './auth-form.component';
import { LoginComponent } from '@routes/auth/auth-form/login/login.component';
import { RegisterComponent } from '@routes/auth/auth-form/register/register.component';
import { ApiService } from '@app/core/services/api.service';

describe('AuthFormComponent', () => {
  let component: AuthFormComponent;
  let fixture: ComponentFixture<AuthFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppStoreModule, SharedModule, CoreModule],
      declarations: [AuthFormComponent, LoginComponent, RegisterComponent],
      providers: [ApiService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
