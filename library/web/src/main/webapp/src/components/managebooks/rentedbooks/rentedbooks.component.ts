import {Component,OnInit} from '@angular/core';
import {DataShareService} from '../../../services/data-share-service';
import {Book} from '../../dulap/model';
import {Router} from '@angular/router';
import {GetUsersService} from '../../../services/get-users-service';

@Component({
  selector: 'rentedbooks',
  templateUrl: 'src/components/managebooks/rentedbooks/rentedbooks.html'
})

export class RentedBooksComponent{
  dataShare : DataShareService;
  getUsersService: GetUsersService;
  books: Book[];
  router: Router;
  userId:number;
  constructor(dataShare: DataShareService, router: Router, getUsersService:GetUsersService){
    this.dataShare = dataShare;
    this.getUsersService = getUsersService;
    console.log(dataShare.userId);
    this.userId = dataShare.userId;
    this.router = router;
    this.books = [];
    this.getUsersService.getRentedBooks(this.userId)
      .subscribe(
        (data:Book[])=> {
          this.books = data;
    },
    (err: any) => console.error(err));
  }

  public clickRow(book:Book) {
    console.log(book.id);
    console.log(this.userId);
    this.getUsersService.returnBook(this.userId, book.id)
      .subscribe(
      (data:Book[])=> {
        this.books = data;
      },
      (err: any) => console.error(err));
  }

}
