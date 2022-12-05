import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// routing
const routes: Routes = [
  {
    path: 'demo',
    loadChildren: () => import('./demo.module').then(m => m.DemoModule)
  }
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AppsModule {}
