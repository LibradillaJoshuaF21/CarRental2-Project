import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { CarsService } from 'src/app/shared/car/cars.service';
import { RentalsService } from 'src/app/shared/rental/rentals.service';
import { UsersService } from 'src/app/shared/user/users.service';

@Component({
  selector: 'app-user-view-rentals',
  templateUrl: './user-view-rentals.component.html',
  styleUrls: ['./user-view-rentals.component.css']
})
export class UserViewRentalsComponent implements OnInit {

  rentalList = [] as any;
  detail = false;
  userList = [] as any;
  carList = [] as any;

  userIndex!: any;
  currentUserEmail!: any;
  selectedRentalDetail!: any;

  constructor(
    private cservice: CarsService, 
    private rservice: RentalsService, 
    private uservice: UsersService, 
    private authService: AuthService) { }

  ngOnInit(): void {
    this.rservice.getRentalList().subscribe((val) => {
      this.rentalList = val;
    });
    this.cservice.getCar().subscribe((val) => {
      this.carList = val;
    });
    this.uservice.getUser().subscribe((val) => {
      this.userList = val;
    });
  }

  ngDoCheck(): void{
    this.currentUserEmail = this.authService.userEmail;
    this.userIndex = this.uservice.getUserIndex(this.currentUserEmail, this.userList);
  }

  onDetail(rentalID: any){
    this.detail = true;
    this.selectedRentalDetail = this.rservice.getSpecificRent(rentalID, this.rentalList);
  }

  detailComplete(value: any){
    this.detail = value;
    this.selectedRentalDetail = null as any;
  }

}
