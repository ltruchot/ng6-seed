// ng
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
// npm
import { catchError, tap } from 'rxjs/operators';
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
      providers: [ApiService],
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

  it(
    'it should be created',
    inject([ApiService], (apiService: ApiService) => {
      expect(apiService).toBeTruthy();
    }),
  );
  it('it should perform a GET request', async(
    inject([ApiService], (apiService: ApiService) => {
      apiService.get({ url: 'posts', apiEnv }).subscribe((data: IPost[]) => {
        expect(data.length).toBe(100);
        expect(data[0].title).toBe(
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        );
      });
    }),
  ));
  it('it should perform a PUT request', async(
    inject([ApiService], (apiService: ApiService) => {
      apiService
        .put({
          url: 'posts/1',
          body: {
            id: 1,
            title: 'foo',
            body: `quia et suscipit
              suscipit recusandae consequuntur expedita et cum
              reprehenderit molestiae ut ut quas totam
              nostrum rerum est autem sunt rem eveniet architecto`,
            userId: 1,
          },
          apiEnv,
        })
        .subscribe((data: IPost) => {
          expect(data.title).toBe('foo');
        });
    }),
  ));
  it('it should perform a PATCH request', async(
    inject([ApiService], (apiService: ApiService) => {
      const title =
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit';
      apiService
        .patch({
          url: 'posts/1',
          body: {
            title,
          },
          apiEnv,
        })
        .subscribe((data: IPost) => {
          expect(data.title).toBe(title);
        });
    }),
  ));
  it('it should perform a POST request', async(
    inject([ApiService], (apiService: ApiService) => {
      apiService
        .post({
          url: 'posts',
          body: {
            title: 'foo',
            body: 'bar',
            userId: 1,
          },
          apiEnv,
        })
        .subscribe((data: IPost) => {
          expect(data.title).toBe('foo');
        });
    }),
  ));
  it('it should perform a DELETE request', async(
    inject([ApiService], (apiService: ApiService) => {
      apiService.delete({ url: 'posts/101', apiEnv }).subscribe((data: any) => {
        expect(data).toEqual({});
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
          expect(data.length).toBe(10);
          expect(data[1].title).toBe('qui est esse');
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
