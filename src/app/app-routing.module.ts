// ng
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
// guards
import { AuthGuard } from '@app/core/guards/auth.guard';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: '@routes/home/home.module#HomeModule',
  },
  {
    path: 'posts',
    canActivate: [AuthGuard],
    loadChildren: '@routes/posts/posts.module#PostsModule',
  },
  {
    path: 'auth',
    loadChildren: '@routes/auth/auth.module#AuthModule',
  },
  {
    path: 'not-found',
    loadChildren: '@routes/not-found/not-found.module#NotFoundModule',
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
