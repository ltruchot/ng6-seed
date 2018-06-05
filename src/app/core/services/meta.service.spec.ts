// ng
import { TestBed, inject } from '@angular/core/testing';
import { Meta } from '@angular/platform-browser';
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
  it('it should initialize correctly', inject(
    [MetaService],
    (service: MetaService) => {
      spyOn(service, 'upsertMeta');
      service.init();
      expect(service.upsertMeta).toHaveBeenCalled();
    },
  ));
  it('it should set & get DOM', inject(
    [MetaService],
    (metaService: MetaService) => {
      metaService.setDOMLang('fr');
      expect(metaService.getDOMLang()).toBe('fr');
    },
  ));
  it('it should set & get meta tags', inject(
    [MetaService, Meta],
    (metaService: MetaService, meta: Meta) => {
      metaService.upsertMeta('robots', metaService.seo.index);
      expect(meta.getTag('name=robots').content).toBe(metaService.seo.index);
      metaService.upsertMeta('robots', metaService.seo.noindex);
      expect(meta.getTag('name=robots').content).not.toBe(
        metaService.seo.index,
      );
      expect(meta.getTag('name=robots').content).toBe(metaService.seo.noindex);
    },
  ));
});
