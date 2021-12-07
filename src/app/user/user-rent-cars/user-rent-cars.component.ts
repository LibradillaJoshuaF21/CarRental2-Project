import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/shared/car/cars.service';
import { UsersService } from 'src/app/shared/user/users.service';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-user-rent-cars',
  templateUrl: './user-rent-cars.component.html',
  styleUrls: ['./user-rent-cars.component.css']
})
export class UserRentCarsComponent implements OnInit {

  carList = [] as any;
  renting = false;
  rentCarIndex!: number;
  userList = [] as any;

  userIndex!: any;
  currentUserEmail!: any;

  constructor(
    private cservice: CarsService, 
    private uservice: UsersService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.cservice.getCar().subscribe((val) => {
      this.carList = val;
    });
    this.uservice.getUser().subscribe((val) => {
      this.userList = val;
    });
    this.currentUserEmail = this.authService.userEmail;
  }

  onRent(index: any){
    this.userIndex = this.uservice.getUserIndex(this.currentUserEmail, this.userList);
    this.renting = true;
    this.rentCarIndex = index;
  }

  rentComplete(value: any){
    this.renting = value;
    this.rentCarIndex = null as any;
  }

}
