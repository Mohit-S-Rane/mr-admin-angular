import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mr-admin-angular';

  constructor(public router: Router) {}

  navigateToHome() {
    this.router.navigate(['']);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }

  navigateToAbout() {
    this.router.navigate(['/about']);
  }
}
