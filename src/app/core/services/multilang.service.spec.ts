// ng
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// npm
import { TranslateModule } from '@ngx-translate/core';
// services
import { MultilangService } from './multilang.service';

describe('MultilangService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
      providers: [MultilangService]
    });
  });

  it(
    'it should be created',
    inject([MultilangService], (service: MultilangService) => {
      expect(service).toBeTruthy();
    })
  );
  it(
    'it can be initialized',
    inject([MultilangService], (service: MultilangService) => {
      service.init('fr', 'en');
      expect(service.getActiveLang()).toBe('fr');
      expect(service.getFallbackLang()).toBe('en');
    })
  );
  it(
    'active language can change',
    inject([MultilangService], (service: MultilangService) => {
      service.setActiveLang('en');
      expect(service.getActiveLang()).toBe('en');
    })
  );
});
