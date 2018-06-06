// ng
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
// services
import { ApiService } from '@core/services/api.service';
import { AuthStoreService } from './auth-store.service';
// import { IUserAuth } from '@models/user.model';

const apiEnv = 'http://localhost:3013/api/';
// const user: IUserAuth = {
//   login: 'test',
//   password: 'test@test.test',
//   email: 'TestTest2018'
// };

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiService, AuthStoreService]
    });
  });

  it(
    'it should be created',
    inject([AuthStoreService], (authStoreService: AuthStoreService) => {
      expect(authStoreService).toBeTruthy();
    })
  );
  it(
    'it should perform a REFRESH TOKEN action',
    async(
      inject([AuthStoreService], (authStoreService: AuthStoreService) => {
        authStoreService
          .refreshToken('token', apiEnv)
          .subscribe((data: any) => {
            expect(data).toBe('random-token-for-test');
          });
      })
    )
  );
});
