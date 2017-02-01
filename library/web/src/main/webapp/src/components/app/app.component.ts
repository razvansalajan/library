import {Component} from '@angular/core';

@Component({
    selector: 'library',
    template: `<div class="navbar navbar-default navbar-fixed-top top-navbar">
                <div class="container app-container">
                  <div class="navbar-header">
                    <h1>The best library!</h1>
                  </div>
                </div>
              </div>
      <div class="container body-content app-container">
                <dulap></dulap>
              </div>`
})
export class TrainerAppComponent {
    name: string = 'World';
}
