// ng
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// modules
import { SharedModule } from '@app/shared/shared.module';
// components
import { PostsComponent } from './posts.component';

const routes = [{ path: '', component: PostsComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [PostsComponent],
})
export class PostsModule {}
