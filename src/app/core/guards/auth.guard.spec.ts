import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AppStoreModule } from '@app/store/app-store.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { appRoutes } from '@app/app-routing.module';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppStoreModule,
        HttpClientModule,
        RouterTestingModule.withRoutes(appRoutes),
      ],
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
