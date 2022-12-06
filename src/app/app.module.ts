import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoComponent } from './module/demo/view/demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LandingPageComponent } from './module/landing-page/view/landing-page.component';
import { ContactComponent } from './module/contact/view/contact.component';
import { AboutComponent } from './module/about/view/about.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    LandingPageComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
