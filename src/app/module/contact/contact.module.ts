import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './view/contact.component';

// routing
const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbModule,
  ],
  providers: [],
})
export class ContactModule {}
