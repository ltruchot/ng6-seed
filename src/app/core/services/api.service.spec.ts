// ng
import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpClientModule,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
// npm
import { catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
// services
import { ApiService } from './api.service';
// values
import { environment } from '@env/environment';
// models
import { IPost } from '@models/test.model';
import { IUser } from '@models/user.model';

const apiEnv = environment.config.testApiUrl;

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [],
    });

    // emulate local storage for auth route
    const fakeLocalStorage = {
      token: 'fake-token',
    };
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in fakeLocalStorage ? fakeLocalStorage[key] : null;
      },
    };
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
  });

  it('it should be created', inject([ApiService], (apiService: ApiService) => {
    expect(apiService).toBeTruthy();
  }));
  it('it should perform GET/PUT/PATCH request', async(
    inject([ApiService], (apiService: ApiService) => {
      const title = 'foo updated';
      apiService
        .get({ url: 'posts', apiEnv })
        .pipe(
          tap((data: IPost[]) => {
            expect(data.length).toBe(5);
            expect(data[0].title).toBe('foo 1');
          }),
          switchMap(() =>
            apiService.put({
              url: 'posts/1',
              body: {
                id: 1,
                title,
                body: 'bar 1',
                userId: 1,
              },
              apiEnv,
            }),
          ),
          tap((data: IPost) => {
            expect(data.title).toBe(title);
          }),
          switchMap(() =>
            apiService.patch({
              url: 'posts/1',
              body: {
                title: 'foo 1',
              },
              apiEnv,
            }),
          ),
          tap((data: IPost) => {
            expect(data.title).toBe('foo 1');
          }),
        )
        .subscribe();
    }),
  ));
  it('it should perform a POST & DELETE request', async(
    inject([ApiService], (apiService: ApiService) => {
      const title = 'foo 6';
      apiService
        .post({
          url: 'posts',
          body: {
            title,
            body: 'bar 6',
            userId: 1,
          },
          apiEnv,
        })
        .pipe(
          tap((data: IPost) => {
            expect(data.title).toBe(title);
          }),
          switchMap(() => apiService.delete({ url: 'posts/6', apiEnv })),
          tap((data: any) => {
            expect(data).toEqual({});
          }),
        )
        .subscribe();
    }),
  ));
  it('it should perform a HEAD request', async(
    inject([ApiService], (apiService: ApiService) => {
      apiService
        .head({ url: 'posts', observe: 'response', apiEnv })
        .subscribe((data: HttpResponse<any>) => {
          expect(data.status).toBe(200);
        });
    }),
  ));
  it('it should perform a CUSTOM request', async(
    inject([ApiService], (apiService: ApiService) => {
      apiService
        .request('head', { url: 'posts', observe: 'response', apiEnv })
        .subscribe((data: HttpResponse<any>) => {
          expect(data.status).toBe(200);
        });
    }),
  ));
  it('it should perform a GET request with url params encoded', async(
    inject([ApiService], (apiService: ApiService) => {
      apiService
        .get({
          url: 'posts',
          apiEnv,
          queryParams: { userId: '1' },
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
        .subscribe((data: IPost[]) => {
          expect(data[1].title).toBe('foo 2');
        });
    }),
  ));
  it('Authenticated route with credential should return waited value', async(
    inject([ApiService], (apiService: ApiService) => {
      expect(
        apiService
          .get({ url: 'user', auth: true, apiEnv })
          .pipe(
            tap((user: IUser) => {
              expect(user.email).toBe('fakeuser@fakedomain.fake');
            }),
          )
          .subscribe(),
      );
    }),
  ));
  it('Authenticated route with bad credentials should throw an error 401', async(
    inject([ApiService], (apiService: ApiService) => {
      expect(
        apiService
          .get({ url: 'user', apiEnv })
          .pipe(
            catchError(err => {
              expect(err.status).toBe(401);
              return of(err);
            }),
          )
          .subscribe(data =>
            expect(data instanceof HttpErrorResponse).toBeTruthy(),
          ),
      );
    }),
  ));
  it('404 response should throw a reactive error', async(
    inject([ApiService], (apiService: ApiService) => {
      expect(
        apiService
          .get({ url: 'posts/404', apiEnv })
          .pipe(
            catchError(err => {
              expect(err.status).toBe(404);
              return of(err);
            }),
          )
          .subscribe(data =>
            expect(data instanceof HttpErrorResponse).toBeTruthy(),
          ),
      );
    }),
  ));
});
