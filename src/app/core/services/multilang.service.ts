// ng
import { Injectable } from '@angular/core';
// npm
import { TranslateService } from '@ngx-translate/core';
// models
import { TValidLangs } from '@models/multilang.model';

@Injectable({
  providedIn: 'root'
})
export class MultilangService {
  constructor(private _translateService: TranslateService) {}

  /**
   * init
   * @desc Initialization is an unavoidable step with translate service.
   *  It will set a default language and an active language for the nav session
   *
   * @param chosen chosen lang for active session (browser, user, default, etc.)
   * @param fallback auto fallback lang, if no translation found for active lang
   */
  init(chosen: TValidLangs, fallback: TValidLangs) {
    this._translateService.setDefaultLang(fallback);
    this.setActiveLang(chosen);
  }

  getActiveLang(): string {
    return this._translateService.currentLang;
  }
  setActiveLang(lang: TValidLangs) {
    this._translateService.use(lang);
  }
  getFallbackLang() {
    return this._translateService.defaultLang;
  }
}
