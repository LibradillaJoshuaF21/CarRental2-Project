import { Component, OnInit } from '@angular/core';
import { RentalsService } from 'src/app/shared/rental/rentals.service';
import { CarsService } from 'src/app/shared/car/cars.service';
import { UsersService } from 'src/app/shared/user/users.service';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-admin-do-reservations',
  templateUrl: './admin-do-reservations.component.html',
  styleUrls: ['./admin-do-reservations.component.css']
})
export class AdminDoReservationsComponent implements OnInit {

  rentalList = [] as any;
  carList = [] as any;
  editing = false;
  editRentalIndex!: number;
  userList = [] as any;

  userIndex!: any;
  currentUserEmail!: any;

  constructor(
    private rservice: RentalsService, 
    private cservice: CarsService, 
    private uservice: UsersService,) { }

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

  onEdit(index: any){
    this.editing = true;
    this.editRentalIndex = index;
  }

  editComplete(value: any){
    this.editing = value;
    this.editRentalIndex = null as any;
  }
}
