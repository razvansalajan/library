import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {ManageBooksComponent} from './managebooks.component';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
      FormsModule],
    declarations: [ManageBooksComponent],
    exports: [ManageBooksComponent]
})
export class ManageBooksModule { }
