import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsersService } from 'src/app/shared/user/users.service';
import { CarsService } from 'src/app/shared/car/cars.service';
import { RentalsService } from 'src/app/shared/rental/rentals.service';
import { Rental } from 'src/app/shared/rental/rental';


@Component({
  selector: 'app-reserve-add',
  templateUrl: './reserve-add.component.html',
  styleUrls: ['./reserve-add.component.css']
})
export class ReserveAddComponent implements OnInit {

  @Input('sendCarList') carList: any;
  @Input('sendUserInfo') userInfo: any;

  availableCarList = [] as any;
  currentDate = new Date();
  isNotRentable = false;

  rentalList = [] as any;

  
  addReserveForm = this.fb.group({
    userEmail: ['',{
      validators: [Validators.required, Validators.email],
    }],
    selectedCar: ['',{
      validators: [Validators.required],
    }],
    rStartDate:['', {
      validators: [Validators.required],
    }],
    rEndDate:['', {
      validators: [Validators.required],
    }],
  });

  constructor(
    private uservice: UsersService,
    private cservice: CarsService,
    private rservice: RentalsService,
    private fb: FormBuilder,
  ) {
      
  }

  ngOnInit(): void {
    this.rservice.getRentalList().subscribe((val) => {
      this.rentalList = val;
    });
  }

  ngOnChanges() {
    this.availableCarList = this.cservice.sortAvailableCars(this.carList);
    this.addReserveForm = this.fb.group({
      userEmail: ['',{
        validators: [Validators.required, Validators.email],
      }],
      selectedCar: ['',{
        validators: [Validators.required],
      }],
      rStartDate:['', {
        validators: [Validators.required],
      }],
      rEndDate:['', {
        validators: [Validators.required],
      }],
    });
  }

  onSubmit(){
    var strDt = this.f.rStartDate.value;
    var endDt = this.f.rEndDate.value;
    strDt = new Date(strDt).setHours(0,0,0,0);
    endDt = new Date(endDt).setHours(0,0,0,0);
    this.currentDate.setHours(0,0,0,0);
    var truthValue = false;
    

    if(new Date(strDt).getTime() > this.currentDate.getTime() && new Date(endDt).getTime() > new Date(strDt).getTime()){
      const payload: Rental = {
        rentalID: '',
        userID: this.userInfo.userID,
        firstName: this.userInfo.firstName,
        lastName: this.userInfo.lastName,
        address: this.userInfo.address,
        email: this.userInfo.email,
        contactNumber: this.userInfo.contactNumber,
        carID: this.f.selectedCar.value,
        rentStartDate: this.f.rStartDate.value,
        rentEndDate: this.f.rEndDate.value,
        rentStatus: truthValue,
      };
      
      console.log(this.rservice.canRent(this.f.rStartDate.value, this.f.selectedCar.value, this.rentalList));
      console.log(this.f.rStartDate.value);
      
      
      if(this.rservice.canRent(this.f.rStartDate.value, this.f.selectedCar.value, this.rentalList)){
        this.rservice.addRental(payload)
        this.addReserveForm.reset();
        
      } else {
        console.log('Cannot Rent');
      }
    } else {
      this.isNotRentable = true;
    }

  
  }

  get f(){
    return this.addReserveForm.controls;
  }

}
