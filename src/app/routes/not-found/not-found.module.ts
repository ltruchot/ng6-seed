import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { RouterModule } from '@angular/router';

const routes = [{ path: '', component: NotFoundComponent, pathMatch: 'full' }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [NotFoundComponent]
})
export class NotFoundModule {}
