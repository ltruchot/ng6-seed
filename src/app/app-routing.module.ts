// ng
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/guards/auth.guard';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: '@routes/home/home.module#HomeModule'
  },
  {
    path: 'not-found',
    pathMatch: 'full',
    loadChildren: '@routes/not-found/not-found.module#NotFoundModule'
  },
  {
    path: 'auth',
    pathMatch: 'full',
    loadChildren: '@routes/auth/auth.module#AuthModule'
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    pathMatch: 'full',
    loadChildren: '@routes/admin/admin.module#AdminModule'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
