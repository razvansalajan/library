import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {ServicesModule} from '../../services/services.module';
import {TrainerAppComponent }  from './app.component';
import {DulapComponent} from '../dulap/dulap.component';
import { FormsModule } from '@angular/forms';
//import {DulapServiceComponent} from '../dulap/dulap_service.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, ServicesModule, FormsModule],
  declarations: [ TrainerAppComponent,DulapComponent],
  bootstrap:    [ TrainerAppComponent ]
})
export class AppModule { }
