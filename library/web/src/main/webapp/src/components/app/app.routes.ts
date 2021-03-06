import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from '../start/start.component';
import {DulapComponent} from '../dulap/dulap.component';
import {UserComponent} from '../users/user.component';
import {RentedBooksComponent} from '../managebooks/rentedbooks/rentedbooks.component';
import {ManageBooksComponent} from '../managebooks/managebooks.component';
import {BorrowBooksComponent} from '../managebooks/borrowbooks/borrowbooks.component';

export const routes: Routes= [
  { path:'', redirectTo:'start', pathMatch:'full'},
  { path: 'start', component: StartComponent
//}
  ,
  children: [
    {path:'', redirectTo:'dulap', pathMatch:'full'},
  { path: 'dulap', component: DulapComponent},
  {path: 'users', component: UserComponent},
  // children: [
  //{ path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'managebooks', component: ManageBooksComponent
  ,
    children: [
      { path: '', redirectTo: 'rentedbooks', pathMatch: 'full'},
      { path: 'rentedbooks', component: RentedBooksComponent },
      { path: 'borrowbooks', component: BorrowBooksComponent }
      ]
    }
  ]
}
  // ]}
  // ,
  // { path: '**', redirectTo:'/start'}
];
export const appRoutingProviders: any[] = [

];
export const routing: ModuleWithProviders =
RouterModule.forRoot(routes,{ useHash: true });
