import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';
import {Book} from '../components/dulap/model';

@Injectable()
export class DulapService {
  constructor(public http: Http) { }

  getBooks() {
    return this.http.get('bookServletAngular?')
      .map((res: Response) => <Book[]> res.json())
      .catch(DulapService.handleError);
    //return Observable.prototype<new Book(1, "titlu", "autor", "publisher", 2005)>.
  }

  getBooksWithKey(searchKey: string, searchValue: string) {
    return this.http.get('bookServletAngular?searchKey='+searchKey+"&searchValue="+searchValue)
      .map((res: Response) => <Book[]> res.json())
      .catch(DulapService.handleError);
    //return Observable.prototype<new Book(1, "titlu", "autor", "publisher", 2005)>.
  }
  static handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
