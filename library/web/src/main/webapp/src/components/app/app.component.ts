import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector: 'library',
    template: `<div class="navbar navbar-default navbar-fixed-top top-navbar">
                <div class="container app-container">
                  <div class="navbar-header" (click)='goHome()'>
                    <h1>The best library!
                    </h1>
                  </div>
                </div>
              </div>
      <div class="container body-content app-container">
                <router-outlet></router-outlet>
              </div>`
})
export class TrainerAppComponent {
  router:Router;
  constructor(router: Router) {
    this.router = router;
  }

  public goHome(){
    // <a class="nav-link" [routerLink]="['/start']">
    this.router.navigate( ['/start'] );
  }
}
