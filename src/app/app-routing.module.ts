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
  {
    path: 'contact',
    loadChildren: () => import('./module/contact/contact.module').then(m => m.ContactModule),
    canActivate: []
  },
  {
    path: 'about',
    loadChildren: () => import('./module/about/about.module').then(m => m.AboutModule),
    canActivate: []
  },
  {
    path: 'find-car',
    loadChildren: () => import('./module/find-car/find-car.module').then(m => m.FindCarModule),
    canActivate: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
