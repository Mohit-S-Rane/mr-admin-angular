import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './module/demo/view/demo.component';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./module/landing-page/landing-page.module').then(m => m.LandingPageModule),
    canActivate: []
  },

  {
    path: 'apps',
    loadChildren: () => import('./module/demo/demo.routing.module').then(m => m.AppsModule),
    canActivate: []
  },
  {
    path: 'demo',
    loadChildren: () => import('./module/demo/demo.module').then(m => m.DemoModule),
    canActivate: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
