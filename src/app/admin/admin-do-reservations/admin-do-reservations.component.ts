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
  userList = [] as any;

  userIndex!: any;
  currentUserEmail!: any;
  selectedRentalInfo!: any;

  constructor(
    private rservice: RentalsService, 
    private cservice: CarsService, 
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

  onEdit(rentID: any){
    this.editing = true;
    this.selectedRentalInfo = this.rservice.getSpecificRent(rentID, this.rentalList);
  }

  editComplete(value: any){
    this.editing = value;
    this.selectedRentalInfo = null as any;
  }
}
