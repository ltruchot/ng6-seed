// ng
import { NgModule } from '@angular/core';
// modules
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  imports: [FooterModule, HeaderModule],
  declarations: [],
  exports: [FooterModule, HeaderModule],
})
export class CoreComponentsModule {}
