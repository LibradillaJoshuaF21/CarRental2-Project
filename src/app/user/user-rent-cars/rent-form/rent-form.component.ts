import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Car } from 'src/app/shared/car/car';
import { Rental } from 'src/app/shared/rental/rental';
import { RentalsService } from 'src/app/shared/rental/rentals.service';


@Component({
  selector: 'app-rent-form',
  templateUrl: './rent-form.component.html',
  styleUrls: ['./rent-form.component.css']
})
export class RentFormComponent implements OnInit {

  @Input('sendCarInfo') car!: Car;
  @Input('sendUserInfo') userInfo! : any;
  @Output() rentStatus = new EventEmitter<boolean>();

  result = "Results Here";
  currentDate = new Date();

  sent = false;
 
  rentForm!: FormGroup;
  // rentForm = this.fb.group({

  //   uFirstName: ['', {
  //     validators: [Validators.required],
  //   }],
  //   uLastName: ['', {
  //     validators: [Validators.required],
  //   }],
  //   uAddress: ['', {
  //     validators: [Validators.required],
  //   }],
  //   uEmail: ['', {
  //     validators: [Validators.required, Validators.email], 
  //   }],
  //   uContactNum: ['', {
  //     validators: [Validators.required],
  //   }],
  //   cModel: ['', {
  //     validators: [Validators.required],
  //   }],
  //   cBrand: ['', {
  //     validators: [Validators.required],
  //   }],
  //   cType: ['', {
  //     validators: [Validators.required],
  //   }],
  //   cTransmission: ['', {
  //     validators: [Validators.required],
  //   }],
  //   cSeats: ['', {
  //     validators: [Validators.required],
  //   }],
  //   rStartDate:['', {
  //     validators: [Validators.required],
  //   }],
  //   rEndDate:['', {
  //     validators: [Validators.required],
  //   }],
  // })
    


  constructor(private fb: FormBuilder, private rservice: RentalsService) { }

  ngOnInit(): void {
    this.rentForm = this.fb.group({
      uFirstName: [this.userInfo.firstName, Validators.required],
      uLastName:[this.userInfo.lastName, Validators.required],
      uAddress:[this.userInfo.address, Validators.required],
      uEmail:[this.userInfo.email, {
        validators: [Validators.required, Validators.email],
      }],
      uContactNum: [this.userInfo.contactNumber, Validators.required],
      cModel: [this.car.model, Validators.required],
      cBrand: [this.car.brand, Validators.required],
      cType: [this.car.type, Validators.required],
      cTransmission: [this.car.transmission, Validators.required],
      cSeats: [this.car.seats, Validators.required],
      rStartDate:[''],
      rEndDate:[''],
    });
  }

  get f(){return this.rentForm.controls}

  ngOnChanges(){
    this.rentForm = this.fb.group({
      uFirstName: [this.userInfo.firstName, Validators.required],
      uLastName:[this.userInfo.lastName, Validators.required],
      uAddress:[this.userInfo.address, Validators.required],
      uEmail:[this.userInfo.email, {
        validators: [Validators.required, Validators.email],
      }],
      uContactNum: [this.userInfo.contactNumber, Validators.required],
      cModel: [this.car.model, Validators.required],
      cBrand: [this.car.brand, Validators.required],
      cType: [this.car.type, Validators.required],
      cTransmission: [this.car.transmission, Validators.required],
      cSeats: [this.car.seats, Validators.required],
      rStartDate:[''],
      rEndDate:[''],
  });
}


  onSubmit(){

    const payload: Rental = {
      rentID: '',
      firstName: this.userInfo.firstName,
      lastName:this.userInfo.lastName,
      address: this.userInfo.address,
      email: this.userInfo.email,
      contactNumber: this.userInfo.contactNumber,
      carID: this.car.carID,
      carType: this.car.type,
      rentStartDate: this.f.rStartDate.value,
      rentEndDate: this.f.rEndDate.value,
    };
    this.rservice.addRent(payload);
    this.rentStatus.emit(false);

    this.sent = true;
    
  }
}
