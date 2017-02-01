import {Component,OnInit} from '@angular/core';
import {Book, BookList, Department, Tipuri} from './model'
import {DulapService} from '../../services/dulap-service'
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'dulap',
  templateUrl: 'src/components/dulap/dulap.html',
})
export class DulapComponent{
  books: BookList;
  ceva: Book[];
  tipuri: Tipuri[];
  tip: string;
  searchValue: string;
  dulapService: DulapService
  constructor(dulapService: DulapService){
    this.books = new BookList([]);
    this.tip = "";
    this.searchValue = "";
    this.dulapService = dulapService;
    this.tipuri = [new Tipuri("title"), new Tipuri("author"), new Tipuri("publisher")];
    this.dulapService.getBooks()
      .subscribe(
        (data:Book[])=> {
          this.books = new BookList(data);
    },
    (err: any) => console.error(err));
  }

  public setSearchValue(newValue: string){
    this.searchValue = newValue;
    this.updateDulap();
  }
  public updateDulap(){
    this.dulapService.getBooksWithKey(this.tip, this.searchValue)
      .subscribe(
        (data:Book[])=> {
          this.books = new BookList(data);
    },
    (err: any) => console.error(err));
    console.log("merge");
    console.log(this.tip);
  }

  public clickRow(book:Book){
    console.log(book.id);
    console.log(this.tip);
    console.log(this.searchValue);
  }
}
