import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found.component';
import { RouterModule } from '@angular/router';

const routes = [{ path: '', component: NotFoundComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [NotFoundComponent],
})
export class NotFoundModule {}
