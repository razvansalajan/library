import {Component,OnInit} from '@angular/core';
import {Book, BookList, Department, Tipuri} from '../../dulap/model';
import {DulapService} from '../../../services/dulap-service';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';
import {GetUsersService} from '../../../services/get-users-service';
import {DataShareService} from '../../../services/data-share-service';

@Component({
  selector: 'borrowbooks',
  templateUrl: 'src/components/managebooks/borrowbooks/borrowbooks.html',
})
export class BorrowBooksComponent{
  books: BookList;
  ceva: Book[];
  tipuri: Tipuri[];
  tip: string;
  searchValue: string;
  dulapService: DulapService;
  managerBooksService: GetUsersService;
  dataShareService: DataShareService;
  constructor(dulapService: DulapService, managerBooksService: GetUsersService,
      dataShareService: DataShareService){
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
    this.managerBooksService = managerBooksService;
    this.dataShareService = dataShareService;
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
    console.log(book.id + "de unde trebe");
    console.log(this.tip);
    console.log(this.searchValue);
    this.managerBooksService.borrowBook(this.dataShareService.userId, book.id)
      .subscribe(
      (data:Book[])=> {
        this.books = new BookList(data);
      },
      (err: any) => console.error(err));
  }
}
