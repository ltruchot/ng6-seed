// ng
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
// modules
import { CoreServicesModule } from './services/core-services.module';
import { CoreComponentsModule } from './components/core-components.module';
import { CoreGuardsModule } from './guards/core-guards.module';

@NgModule({
  imports: [
    CommonModule,
    CoreComponentsModule,
    CoreGuardsModule,
    CoreServicesModule
  ],
  declarations: [],
  providers: [],
  exports: [CoreComponentsModule]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule?: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Should import it only in AppModule'
      );
    }
  }
}
