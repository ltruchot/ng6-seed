// ng
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// modules
import { SharedModule } from '@app/shared/shared.module';
// components
import { HomeComponent } from './home.component';

const routes = [{ path: '', component: HomeComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
