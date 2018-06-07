// ng
import { ModuleWithProviders, NgModule } from '@angular/core';
// npm
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// values
import { StoreEffects } from '@store/store-effects.index';
import { reducers, metaReducers } from '@store/reducers';
import { environment } from '@env/environment';

@NgModule({
  imports: [
    EffectsModule.forRoot([...StoreEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  exports: [],
  providers: [],
})
export class AppStoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppStoreModule,
    };
  }
}
