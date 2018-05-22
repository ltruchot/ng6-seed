// ng
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
// services
import { ApiService } from './api.service';
// values
import { environment } from '@env/environment';

const apiEnv = environment.config.testApiUrl;

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiService]
    });
  });

  it(
    'it should be created',
    inject([ApiService], (apiService: ApiService) => {
      expect(apiService).toBeTruthy();
    })
  );
  it('it should perform a GET request', async(
    inject([ApiService], (apiService: ApiService) => {
      apiService.get({ url: 'posts', apiEnv }).subscribe((data: any) => {
        expect(data.length).toBe(100);
        expect(data[0].title).toBe(
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
        );
      });
    })
  ));
  it('it should perform a PUT request', async(
    inject([ApiService], (apiService: ApiService) => {
      apiService
        .put({
          url: 'posts/1',
          body: {
            id: 1,
            title: 'foo',
            body:
              'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
            userId: 1
          },
          apiEnv
        })
        .subscribe((data: any) => {
          expect(data.title).toBe('foo');
        });
    })
  ));
  it('it should perform a PATCH request', async(
    inject([ApiService], (apiService: ApiService) => {
      const title =
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit';
      apiService
        .patch({
          url: 'posts/1',
          body: {
            title
          },
          apiEnv
        })
        .subscribe((data: any) => {
          expect(data.title).toBe(title);
        });
    })
  ));
  it('it should perform a POST request', async(
    inject([ApiService], (apiService: ApiService) => {
      apiService
        .post({
          url: 'posts',
          body: {
            title: 'foo',
            body: 'bar',
            userId: 1
          },
          apiEnv
        })
        .subscribe((data: any) => {
          expect(data.title).toBe('foo');
        });
    })
  ));
  it('it should perform a DELETE request', async(
    inject([ApiService], (apiService: ApiService) => {
      apiService.delete({ url: 'posts/101', apiEnv }).subscribe((data: any) => {
        expect(data).toEqual({});
      });
    })
  ));
  it('it should perform a GET request with url params encoded', async(
    inject([ApiService], (apiService: ApiService) => {
      apiService
        .get({
          url: 'posts',
          apiEnv,
          queryParams: { userId: '1' },
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .subscribe((data: any) => {
          expect(data.length).toBe(10);
          expect(data[1].title).toBe('qui est esse');
        });
    })
  ));
  it('404 response should throw a reactive error', async(
    inject([ApiService], (apiService: ApiService) => {
      expect(async () =>
        apiService.get({ url: 'posts/404', apiEnv }).subscribe((err: any) => {
          expect(err.status).toBe(404);
        })
      );
    })
  ));
});
