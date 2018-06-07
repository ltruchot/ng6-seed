// ng
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
// services
import { StorePostService } from './store-post.service';
import { ApiService } from '@app/core/services/api.service';
// values
import { environment } from '@env/environment';
// models
import { IPost } from '@models/test.model';

const apiEnv = environment.config.testApiUrl;

describe('StorePostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [StorePostService, ApiService],
    });
  });

  it('should be created', inject(
    [StorePostService],
    (service: StorePostService) => {
      expect(service).toBeTruthy();
    },
  ));
  it('it should perform a GET request on "posts"', async(
    inject([StorePostService], (storePostService: StorePostService) => {
      storePostService.getPosts(apiEnv).subscribe((data: IPost[]) => {
        expect(data.length).toBe(5);
        expect(data[0].title).toBe('foo 1');
      });
    }),
  ));
});
