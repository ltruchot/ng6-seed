// ng
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: '@routes/home/home.module#HomeModule',
  },
  {
    path: 'auth',
    pathMatch: 'full',
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
