// ng
import { ModuleWithProviders, NgModule } from '@angular/core';
// npm
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// services
import { AuthStoreService } from './auth/auth-store.service';
// values
import { metaReducers, reducers } from './store-utils.values';
import { AllEffects } from './effects.values';
import { environment } from '@env/environment';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([...AllEffects]),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  exports: [],
  providers: [AuthStoreService]
})
export class AppStoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppStoreModule
    };
  }
}
