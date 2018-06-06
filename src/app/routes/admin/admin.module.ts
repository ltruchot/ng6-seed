// ng
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// components
import { AdminComponent } from './admin.component';
const routes = [{ path: '', component: AdminComponent, pathMatch: 'full' }];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [AdminComponent]
})
export class AdminModule {}
