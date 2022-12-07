import { Component } from '@angular/core';

@Component({
  selector: 'app-find-car',
  templateUrl: 'find-car.component.html',
  styles: [
    `
      .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        width: 100%;
      }

      .full-width {
        width: 100%;
      }
    `,
  ],
})
export class FindCarComponent {
  constructor() {}
}
