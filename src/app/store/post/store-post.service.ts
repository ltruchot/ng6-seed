// ng
import { Injectable } from '@angular/core';
// npm
import { Observable } from 'rxjs';
// services
import { ApiService } from '@app/core/services/api.service';
// models
import { IPost } from '@models/test.model';

@Injectable({
  providedIn: 'root',
})
export class StorePostService {
  constructor(private _apiService: ApiService) {}
  getPosts(apiEnv?: string): Observable<IPost[]> {
    return this._apiService.get({ url: 'posts', apiEnv });
  }
}
