import {Component} from '@angular/core';
@Component({
    selector: 'library',
    template: `<div class="navbar navbar-default navbar-fixed-top top-navbar">
                <div class="container app-container">
                  <div class="navbar-header">
                    <h1><a class="nav-link" [routerLink]="['/start']">The best library!</a>
                    </h1>
                  </div>
                </div>
              </div>
      <div class="container body-content app-container">
                <router-outlet></router-outlet>
              </div>`
})
export class TrainerAppComponent {
  constructor() {

}
}
