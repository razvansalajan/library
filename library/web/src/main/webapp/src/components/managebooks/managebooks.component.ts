import {Component,OnInit} from '@angular/core';
import {DataShareService} from '../../services/data-share-service';
import {Book} from '../dulap/model';
import {Router, ActivatedRoute} from '@angular/router';
import {GetUsersService} from '../../services/get-users-service';

@Component({
  selector: 'managebooks',
  templateUrl: 'src/components/managebooks/managebooks.html'
})

export class ManageBooksComponent{
  public userId: number;
  constructor(dataShare: DataShareService, public router:Router,
    public route : ActivatedRoute
   ){
    this.userId = dataShare.userId;
  }

  public handleReturn(){
    this.router.navigate( ['rentedbooks'], {relativeTo:this.route});
  }

  public handleBorrow(){
    this.router.navigate( ['borrowbooks'], {relativeTo:this.route});
  }
}
