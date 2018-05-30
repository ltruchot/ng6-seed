import { Injectable } from '@angular/core';
import { IUserAuth, IUser } from '@models/user.model';
import { Observable } from 'rxjs';
import { ApiService } from '@app/core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class StoreAuthService {
  constructor(private _apiService: ApiService) {}
  register(user: IUserAuth, apiEnv?: string): Observable<any> {
    return this._apiService.post({ url: 'user', body: user, apiEnv });
  }

  getCurrentUser(apiEnv?: string): Observable<IUser> {
    return this._apiService.get({ url: 'user', auth: true, apiEnv });
  }

  login(user: IUserAuth, apiEnv?: string): Observable<any> {
    return this._apiService.post({ url: 'login', body: user, apiEnv });
  }
}
