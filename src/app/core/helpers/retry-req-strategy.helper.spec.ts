// ng
import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpClientModule,
  HttpHeaders,
  HttpClient,
} from '@angular/common/http';
// npm
import { tap, retryWhen } from 'rxjs/operators';
import { of, defer } from 'rxjs';
// values
import { environment } from '@env/environment';
import { retryReqStrategyHelper } from '@app/core/helpers/retry-req-strategy.helper';
// models
import { IReqOptions, IRetryReqOptions } from '@models/http.model';

describe('retryReqStrategyHelper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient],
    });
  });
  it('Retry strategy should work as expected for a GET request', async(
    inject([HttpClient], (http: HttpClient) => {
      const url = environment.config.testApiUrl + 'user';
      const headers = {
        'Content-Type': 'application/json',
      };
      // prepare options without Bearer (should fail)
      const reqOptions: IReqOptions = {
        headers: new HttpHeaders(headers),
        observe: 'body',
      };

      // will add a beare at second attemps (success)
      const retryOptions: IRetryReqOptions = {
        maxRetryAttempts: 1,
        requestToWait: of({
          Authorization: 'Bearer fake-token',
        }),
      };
      // some routes could need a retry action with new headers
      // for example, a "refresh token" action in case of 403 / 401
      if (retryOptions && retryOptions.requestToWait) {
        retryOptions.requestToWait = retryOptions.requestToWait.pipe(
          tap((newHeaders: any) => {
            // here, we clone & update headers with a new headers options
            reqOptions.headers = new HttpHeaders({
              ...headers,
              ...newHeaders,
            });
          }),
        );
      }

      // do request, retry if needed, and catch any error as observable
      // defer is needed to allow params change  during retryWhen rxjs action
      defer(() => http.request('get', url, reqOptions))
        .pipe(retryWhen(retryReqStrategyHelper(retryOptions)))
        .subscribe((user: any) => {
          expect(user.id).toBe('fakeid');
        });
    }),
  ));
});
