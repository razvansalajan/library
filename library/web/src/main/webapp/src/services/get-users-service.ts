import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';
import {User} from '../components/users/model';
import {Book} from '../components/dulap/model';

@Injectable()
export class GetUsersService {
  constructor(public http: Http) { }

  getUsers() {
    return this.http.get('getUsersAngular?')
      .map((res: Response) => <User[]> res.json())
      .catch(GetUsersService.handleError);
    //return Observable.prototype<new Book(1, "titlu", "autor", "publisher", 2005)>.
  }

  getUsersWithKey(searchKey: string, searchValue: string) {
    return this.http.get('getUsersAngular?searchKey='+searchKey+"&searchValue="+searchValue)
      .map((res: Response) => <User[]> res.json())
      .catch(GetUsersService.handleError);
    //return Observable.prototype<new Book(1, "titlu", "autor", "publisher", 2005)>.
  }

  getRentedBooks(userId: number){
    return this.http.get('getRentedBooksAngular?userId='+userId)
      .map((res: Response) => <Book[]> res.json())
      .catch(GetUsersService.handleError);
  }

  returnBook(userId: number, bookId:number){
    console.log('returnBookAngular?userId='+userId+"&bookId=" + bookId);
    return this.http.get('returnBookAngular?userId='+userId+"&bookId=" + bookId)
      .map((res: Response) => <Book[]>res.json())
      .catch(GetUsersService.handleError);
  }

  static handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
