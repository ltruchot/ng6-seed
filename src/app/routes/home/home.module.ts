// ng
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// components
import { HomeComponent } from './home.component';

const routes = [{ path: '', component: HomeComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [HomeComponent]
})
export class HomeModule {}
