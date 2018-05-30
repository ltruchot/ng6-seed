// ng
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: '@routes/home/home.module#HomeModule',
  },
  {
    path: 'posts',
    pathMatch: 'full',
    loadChildren: '@routes/posts/posts.module#PostsModule',
  },
  {
    path: 'auth',
    pathMatch: 'full',
    loadChildren: '@routes/auth/auth.module#AuthModule',
  },
  {
    path: 'not-found',
    pathMatch: 'full',
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
