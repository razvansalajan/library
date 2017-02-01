import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {RentedBooksComponent} from './rentedbooks.component';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
      FormsModule],
    declarations: [RentedBooksComponent],
    exports: [RentedBooksComponent]
})
export class RentedBooksModule { }
