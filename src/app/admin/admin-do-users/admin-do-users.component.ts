import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/user/users.service';

@Component({
  selector: 'app-admin-do-users',
  templateUrl: './admin-do-users.component.html',
  styleUrls: ['./admin-do-users.component.css']
})
export class AdminDoUsersComponent implements OnInit {

  userList = [] as any;
  editing = false;
  selectedUSerInfo!: any;

  constructor(private uservice: UsersService) { }

  ngOnInit(): void {
    this.uservice.getUser().subscribe((val) => {
      this.userList = val;
    });
  }

  onEdit(userID: any){
    this.editing = true;
    this.selectedUSerInfo = this.uservice.getSpecificUser(userID, this.userList);
  }

  editComplete(value: any){
    this.editing = value;
    this.selectedUSerInfo = null as any;
  }

}
