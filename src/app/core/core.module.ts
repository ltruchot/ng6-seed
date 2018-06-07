// ng
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
// modules
import { CoreComponentsModule } from './components/core-components.module';

@NgModule({
  imports: [CommonModule, CoreComponentsModule],
  declarations: [],
  providers: [],
  exports: [CoreComponentsModule],
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
