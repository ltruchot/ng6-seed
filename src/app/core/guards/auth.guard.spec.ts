// ng
import { inject, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
// modules
import { AppStoreModule } from '@store/app-store.module';
// guards
import { AuthGuard } from './auth.guard';
// services
import { ApiService } from '@app/core/services/api.service';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, AppStoreModule],
      providers: [AuthGuard, ApiService]
    });
  });

  it(
    'should ...',
    inject([AuthGuard], (guard: AuthGuard) => {
      expect(guard).toBeTruthy();
    })
  );
});
