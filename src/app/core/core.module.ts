// ng
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
// modules
import { CoreServicesModule } from './services/core-services.module';
import { CoreComponentsModule } from './components/core-components.module';
import { MultilangModule } from '@app/core/modules/multilang.module';

@NgModule({
  imports: [
    CommonModule,
    CoreServicesModule,
    CoreComponentsModule,
    MultilangModule
  ],
  declarations: [],
  providers: [],
  exports: [CoreComponentsModule, MultilangModule]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule?: CoreModule,
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. You should import it only in AppModule.',
      );
    }
  }
}
