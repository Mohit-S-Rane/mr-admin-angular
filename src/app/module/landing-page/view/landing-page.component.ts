import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: 'landing-page.component.html',
  styles: [
    `
      .bg-image {
        background: #ffffff
          url('../../../../assets/images/background/background_image.jpg');
          /* no-repeat right top; */
        height: 100vh;
        /* width: 100vw; */
      }

      .lg-title {
        margin-top: 5rem;
        color: #ffd700;
        font-weight: 500;
        font-size: 2rem;
      }

      .lg-title-1 {
        color: white;
        font-size: 4rem;
        margin-top: 2rem;
        font-weight: 500;
      }

      .lg-title-2 {
        color: white;
        font-size: 3rem;
        margin-top: 3rem;
        font-weight: 500;
      }

      .lg-title-3 {
        /* color: white; */
        /* font-size: 3rem; */
        margin-top: 3rem;
        /* font-weight: 500; */
      }
    `,
  ],
})
export class LandingPageComponent {
  constructor(public router: Router) {}

  navigateToFindCarPage(){
    this.router.navigate(['/find-car'])
  }
}
