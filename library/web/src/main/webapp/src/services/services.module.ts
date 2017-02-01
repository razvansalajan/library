import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DulapService } from './dulap-service';
import {DataShareService} from './data-share-service';
import {GetUsersService} from './get-users-service';

@NgModule({
    imports: [],
    declarations: [],
    providers: [DulapService,
      DataShareService,
      GetUsersService
    ],
})
export class ServicesModule { }
