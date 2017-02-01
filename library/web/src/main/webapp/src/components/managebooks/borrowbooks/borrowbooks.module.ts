import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BorrowBooksComponent }  from './borrowbooks.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
      FormsModule],
    declarations: [BorrowBooksComponent],
    exports: [BorrowBooksComponent],
})
export class BorrowBooksModule { }
