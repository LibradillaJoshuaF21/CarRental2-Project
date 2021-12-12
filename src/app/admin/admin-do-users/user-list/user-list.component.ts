import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/shared/user/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input('sendUserList') userList: any;
  @Output() selectedUser = new EventEmitter<number>();

  p: number = 1;
  count: number = 3;

  constructor(private uservice: UsersService) { }

  ngOnInit(): void {

  }

  onEdit(userID: any){
    this.selectedUser.emit(userID);
  }


}
