import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoComponent } from './view/demo.component';

// routing
const routes: Routes = [
  {
    path: 'demo-page',
    component: DemoComponent,
}
//   {
//     path: 'user-list',
//     component: UserListComponent,
//     resolve: {
//       uls: UserListService
//     },
//     data: { animation: 'UserListComponent' }
//   }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbModule
  ],
  providers: []
})
export class DemoModule {}
