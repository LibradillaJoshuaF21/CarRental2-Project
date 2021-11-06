import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/shared/car/cars.service';
import { User } from 'src/app/shared/user/user';
import { UsersService } from 'src/app/shared/user/users.service';

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

  constructor(private cservice: CarsService, private uservice: UsersService) { }

  ngOnInit(): void {
    this.cservice.getCar().subscribe((val) => {
      this.carList = val;
    });
    this.uservice.getUser().subscribe((val) => {
      this.userList = val;
    });
  }

  onRent(index: any){
    this.renting = true;
    this.rentCarIndex = index;
  }

  rentComplete(value: any){
    this.renting = value;
    this.rentCarIndex = null as any;
  }
}
