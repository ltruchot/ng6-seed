// ng
import { Component, OnInit } from '@angular/core';
import { MetaService } from '@app/core/services/meta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _metaService: MetaService) {}
  ngOnInit() {
    // set seo & version basics
    this._metaService.init();
  }
}
