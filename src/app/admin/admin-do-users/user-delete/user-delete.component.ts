import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/shared/user/users.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  @Input('sendUserID') userID!: string;
  @Output() editStatus = new EventEmitter<boolean>()

  constructor(private uservice: UsersService) { }

  ngOnInit(): void {
  }

  onDelete(){
    this.uservice.removeUser(this.userID);
    this.editStatus.emit(false);
  }
}
