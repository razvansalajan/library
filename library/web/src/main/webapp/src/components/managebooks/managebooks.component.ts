import {Component,OnInit} from '@angular/core';
import {DataShareService} from '../../services/data-share-service';
import {Book} from '../dulap/model';
import {Router} from '@angular/router';
import {GetUsersService} from '../../services/get-users-service';

@Component({
  selector: 'managebooks',
  templateUrl: 'src/components/managebooks/managebooks.html'
})

export class ManageBooksComponent{
  public userId: number;
  constructor(dataShare: DataShareService){
    this.userId = dataShare.userId;
  }
}
