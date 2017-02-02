import {Component,OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'start',
  templateUrl: 'src/components/start/start.html',
})

export class StartComponent{
  constructor(public router: Router, public route: ActivatedRoute){

  }
  public handleDulap(){
    console.log("dulap");
    this.router.navigate( ['dulap'], {relativeTo:this.route});
  }
  public handleUsers(){
    console.log("users");
    this.router.navigate( ['users'],  {relativeTo:this.route});
  }
}
