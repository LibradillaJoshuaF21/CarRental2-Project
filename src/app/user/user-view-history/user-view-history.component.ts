import { Component, OnInit } from '@angular/core';
import { RentHistory } from 'src/app/shared/rent-history/history';
import { HistoryService } from 'src/app/shared/rent-history/history.service';
import { UsersService } from 'src/app/shared/user/users.service';
import { CarsService } from 'src/app/shared/car/cars.service';

@Component({
  selector: 'app-user-view-history',
  templateUrl: './user-view-history.component.html',
  styleUrls: ['./user-view-history.component.css']
})
export class UserViewHistoryComponent implements OnInit {

  historyList = [] as any;
  detail = false;
  detailHistoryIndex!: number;
  userList = [] as any;
  carList = [] as any;

  constructor(private cservice: CarsService, private rhservice: HistoryService, private uservice: UsersService) { }

  ngOnInit(): void {
    this.rhservice.getRentHistoryList().subscribe((val) => {
      this.historyList = val;
    });
    this.cservice.getCar().subscribe((val) => {
      this.carList = val;
    });
    this.uservice.getUser().subscribe((val) => {
      this.userList = val;
    });
  }

  onDetail(index: any){
      this.detail = true;
      this.detailHistoryIndex = index;
  }

  detailComplete(value: any){
    this.detail = value;
    this.detailHistoryIndex = null as any;
  }



}
