import { TestBed, inject } from '@angular/core/testing';

import { StoreAuthService } from './store-auth.service';
import { ApiService } from '@app/core/services/api.service';
import { HttpClientModule } from '@angular/common/http';

describe('StoreAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [StoreAuthService, ApiService],
    });
  });

  it(
    'should be created',
    inject([StoreAuthService], (service: StoreAuthService) => {
      expect(service).toBeTruthy();
    }),
  );
});
