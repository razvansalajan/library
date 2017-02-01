import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DulapComponent }  from './dulap.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
      FormsModule],
    declarations: [DulapComponent],
    exports: [DulapComponent],
})
export class DulapModule { }
