import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';
import {Book} from '../components/dulap/model';

@Injectable()
export class DataShareService {
  public userId: number;
  constructor() {
    this.userId = null;
  }

}
