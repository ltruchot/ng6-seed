// ng
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
// values
import { environment } from '@env/environment';
// models
import { IMetaSeo, IMetaVersion } from '@models/meta.model';

// get version from package.json
declare var require: any;
const { version } = require('@app/../../package.json');

@Injectable({ providedIn: 'root' })
export class MetaService {
  public seo: IMetaSeo = {
    index: 'index,follow',
    noindex: 'noindex,nofollow,noarchive,nosnippet,noimageindex',
  };
  public version: IMetaVersion = {
    version,
    env: environment.production ? 'prod' : 'dev',
  };
  constructor(
    @Inject(DOCUMENT) private _document: HTMLDocument,
    private _meta: Meta,
    private _title: Title,
  ) {}

  init(): void {
    // this app need to be unindexed from google
    // no seo needed
    this.upsertMeta('robots', this.seo.noindex);
  }

  upsertMeta(name: string, content: string, isProperty?: boolean): void {
    const metaAssociation =
      (isProperty ? 'property' : 'name') + '="' + name + '"';
    const metaRobotsTag = this._meta.getTag(metaAssociation);
    if (metaRobotsTag) {
      this._meta.updateTag({ content }, metaAssociation);
    } else {
      const tag = isProperty ? { property: name } : { name };
      this._meta.addTag({ ...tag, content }, true);
    }
  }

  getDOMLang(): string {
    return this._document.documentElement.lang;
  }
  setDOMLang(lang: string): void {
    this._document.documentElement.lang = lang;
  }

  changeTitle(title: string): void {
    this._title.setTitle(title);
  }
}
