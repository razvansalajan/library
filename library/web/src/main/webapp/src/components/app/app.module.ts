import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {ServicesModule} from '../../services/services.module';
import {TrainerAppComponent }  from './app.component';
import {DulapModule} from '../dulap/dulap.module';
import {StartModule} from '../start/start.module';
import { FormsModule } from '@angular/forms';
import {routing, appRoutingProviders} from './app.routes';
import {UserModule} from '../users/user.module';
import {RentedBooksModule} from '../managebooks/rentedbooks/rentedbooks.module';
import {ManageBooksModule} from '../managebooks/managebooks.module';
import {BorrowBooksModule} from '../managebooks/borrowbooks/borrowbooks.module';
//import {DulapServiceComponent} from '../dulap/dulap_service.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, ServicesModule, FormsModule, routing,
                DulapModule,
                StartModule,
                UserModule,
                RentedBooksModule,
                ManageBooksModule,
                BorrowBooksModule],
  declarations: [ TrainerAppComponent],
  providers: [
    appRoutingProviders
  ],
  bootstrap:    [ TrainerAppComponent ]
})
export class AppModule { }
