import { Component, OnInit } from '@angular/core';
import { RentHistory } from 'src/app/shared/rent-history/history';
import { HistoryService } from 'src/app/shared/rent-history/history.service';
import { UsersService } from 'src/app/shared/user/users.service';
import { CarsService } from 'src/app/shared/car/cars.service';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-user-view-history',
  templateUrl: './user-view-history.component.html',
  styleUrls: ['./user-view-history.component.css']
})
export class UserViewHistoryComponent implements OnInit {

  historyList = [] as any;
  detail = false;
  userList = [] as any;
  carList = [] as any;

  userIndex!: any;
  currentUserEmail!: any;
  selectedRentalHistory!: any;


  constructor(private cservice: CarsService, private rhservice: HistoryService, private uservice: UsersService, private authService: AuthService) { }

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

  ngDoCheck(){
    this.currentUserEmail = this.authService.userEmail;
    this.userIndex = this.uservice.getUserIndex(this.currentUserEmail, this.userList);
  }

  onDetail(rentalID: any){
      this.detail = true;
      this.selectedRentalHistory = this.rhservice.getSpecificRentHistory(rentalID, this.historyList);
  }

  detailComplete(value: any){
    this.detail = value;
    this.selectedRentalHistory = null as any;
  }



}
