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
      this.rservice.addRental(payload)
      this.addReserveForm.reset();
    } else {
      this.isNotRentable = true;
    }

  
  }

  get f(){
    return this.addReserveForm.controls;
  }

   // if(new Date(strDt).getTime() === this.currentDate.getTime()){
    //   truthValue = true;
    // }

  // this.currentDate.setHours(0,0,0,0);

  // var endDt = this.f.rEndDate.value;
  // endDt = new Date(endDt).setHours(0,0,0,0);
  // console.log(new Date(endDt).getTime());
  // console.log(this.currentDate.getTime());
  // console.log(this.currentDate.getTime() === new Date(endDt).getTime());
}
