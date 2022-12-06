import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './view/landing-page.component';

// routing
const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
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
export class LandingPageModule {}
