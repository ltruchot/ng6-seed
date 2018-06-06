// ng
import { Injectable } from '@angular/core';
// npm
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
// services
import { ApiService } from '@core/services/api.service';
// models
import { IUser, IUserAuth } from '@models/user.model';
import { IRetryReqOptions } from '@models/http.model';

@Injectable()
export class AuthStoreService {
  constructor(private apiService: ApiService) {}

  register(user: IUserAuth, apiEnv?: string): Observable<any> {
    return this.apiService.post({ url: 'user', body: user, apiEnv });
  }

  login(user: IUserAuth, apiEnv?: string): Observable<any> {
    return this.apiService.post({ url: 'login', body: user, apiEnv });
  }

  refreshToken(token: string, apiEnv?: string): Observable<any> {
    return this.apiService.post({
      url: 'token',
      body: { refreshToken: token },
      apiEnv
    });
  }

  user(apiEnv?: string): Observable<IUser> {
    return this.apiService.get({ url: 'user', auth: true, apiEnv });
  }

  getAuthRetryOptions = (): IRetryReqOptions => {
    return {
      maxRetryAttempts: 1,
      scalingDuration: 0,
      statusCodes: [401, 403],
      requestToWait: this.refreshToken('fake-random-token').pipe(
        map((token: string) => {
          return {
            Autorization: 'Bearer ' + token
          };
        })
      )
    };
  };
}
