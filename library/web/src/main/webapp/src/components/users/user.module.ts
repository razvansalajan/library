import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserComponent }  from './user.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
      FormsModule],
    declarations: [UserComponent],
    exports: [UserComponent]
})
export class UserModule { }
