import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
