// ng
import { TestBed, inject } from '@angular/core/testing';
// npm
// services
import { MetaService } from '@app/core/services/meta.service';
// values
// models

describe('MetaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [],
    });
  });

  it('it should be created', inject(
    [MetaService],
    (metaService: MetaService) => {
      expect(metaService).toBeTruthy();
    },
  ));
  it('it should set & get DOM', inject(
    [MetaService],
    (metaService: MetaService) => {
      metaService.setDOMLang('fr');
      expect(metaService.getDOMLang()).toBe('fr');
    },
  ));
});
