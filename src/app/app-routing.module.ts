import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './module/demo/view/demo.component';

const appRoutes: Routes = [
  {
    path: 'apps',
    loadChildren: () => import('./module/demo/demo.routing.module').then(m => m.AppsModule),
    canActivate: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
