import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';

@NgModule({
  imports: [HeaderModule],
  declarations: [FooterComponent],
  exports: [FooterComponent, HeaderModule]
})
export class CoreComponentsModule {}
