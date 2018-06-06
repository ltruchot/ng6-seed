import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@core/components/header/header.component';
import { LogoutComponent } from '@core/components/header/logout/logout.component';
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, LogoutComponent],
  exports: [HeaderComponent, LogoutComponent]
})
export class HeaderModule {}
