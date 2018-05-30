// ng
import { Component, OnInit } from '@angular/core';
// services
import { MultilangService } from '@app/core/services/multilang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _multilangService: MultilangService) {}

  ngOnInit() {
    // Translate service MUST be initialized here
    this._multilangService.init('en', 'en');
  }

  get currentLang() {
    const activeLang = this._multilangService.getActiveLang();
    return {
      value: activeLang === 'fr' ? 'anglais' : 'french',
    };
  }

  /**
   * toggleLang
   * @desc A lang switcher demo method. SHOULD remove it and create your own
   */
  toggleLang() {
    const activeLang = this._multilangService.getActiveLang();
    this._multilangService.setActiveLang(activeLang === 'fr' ? 'en' : 'fr');
  }
}
