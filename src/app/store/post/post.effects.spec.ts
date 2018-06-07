import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PostEffects } from './post.effects';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '@app/core/services/api.service';

describe('PostService', () => {
  let actions$: Observable<any>;
  let effects: PostEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PostEffects, ApiService, provideMockActions(() => actions$)],
    });

    effects = TestBed.get(PostEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
