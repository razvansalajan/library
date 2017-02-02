import {Component,OnInit} from '@angular/core';
import {DataShareService} from '../../services/data-share-service';
import {User} from './model';
import {Router, ActivatedRoute} from '@angular/router';
import {GetUsersService} from '../../services/get-users-service';

@Component({
  selector: 'userComp',
  templateUrl: 'src/components/users/user.html'
})
export class UserComponent{
  dataShare : DataShareService;
  users: User[];
  router: Router;
  getUsersService: GetUsersService;
  searchValue: string;
  searchKey: string;
  optionType: string[];
  r: ActivatedRoute;
  constructor(dataShare: DataShareService, router: Router, getUsersService: GetUsersService, r:ActivatedRoute){
    this.dataShare = dataShare;
    this.router = router;
    this.users = [];
    this.searchValue = "";
    this.searchKey = "";
    this.optionType = ["userName", "fullName"];
    this.getUsersService = getUsersService;
    this.getUsersService.getUsers()
      .subscribe(
        (data:User[])=> {
          this.users = data;
    },
    (err: any) => console.error(err));
    this.r = r;
  }

  public clickRow(user:User) {
    this.dataShare.userId = user.id;
    this.router.navigate( ['../managebooks'], { relativeTo: this.r } );
    console.log(this.dataShare.userId);
  }
  public setSearchValue(newValue: string){
    this.searchValue = newValue;
    this.updateUsers();
  }
  public updateUsers(){
    this.getUsersService.getUsersWithKey(this.searchKey, this.searchValue)
      .subscribe(
        (data:User[])=> {
          this.users = data;
    },
    (err: any) => console.error(err));
    console.log("merge");
    console.log(this.searchKey);
  }

}
