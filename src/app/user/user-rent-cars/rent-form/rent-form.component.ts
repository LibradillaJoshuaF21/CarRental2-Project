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
  @Input('sendUserInfo') userInfo!: any;
  @Output() rentStatus = new EventEmitter<boolean>();

  result = "Results Here";
  currentDate = new Date();
  isNotRentable = false;

  sent = false;

  rentForm!: FormGroup;

  constructor(private fb: FormBuilder, private rservice: RentalsService) { }

  ngOnInit(): void {
    this.rentForm = this.fb.group({
      uFirstName: [this.userInfo.firstName, Validators.required],
      uLastName: [this.userInfo.lastName, Validators.required],
      uAddress: [this.userInfo.address, Validators.required],
      uEmail: [this.userInfo.email, {
        validators: [Validators.required, Validators.email],
      }],
      uContactNum: [this.userInfo.contactNumber, Validators.required],
      cModel: [this.car.model, Validators.required],
      cBrand: [this.car.brand, Validators.required],
      cType: [this.car.type, Validators.required],
      cTransmission: [this.car.transmission, Validators.required],
      cSeats: [this.car.seats, Validators.required],
      rStartDate: [''],
      rEndDate: [''],
    });
  }

  get f() { return this.rentForm.controls }

  ngOnChanges() {
    this.rentForm = this.fb.group({
      uFirstName: [this.userInfo.firstName, Validators.required],
      uLastName: [this.userInfo.lastName, Validators.required],
      uAddress: [this.userInfo.address, Validators.required],
      uEmail: [this.userInfo.email, {
        validators: [Validators.required, Validators.email],
      }],
      uContactNum: [this.userInfo.contactNumber, Validators.required],
      cModel: [this.car.model, Validators.required],
      cBrand: [this.car.brand, Validators.required],
      cType: [this.car.type, Validators.required],
      cTransmission: [this.car.transmission, Validators.required],
      cSeats: [this.car.seats, Validators.required],
      rStartDate: [''],
      rEndDate: [''],
    });
  }


  onSubmit() {

    var strDt = this.f.rStartDate.value;
    var endDt = this.f.rEndDate.value;
    strDt = new Date(strDt).setHours(0, 0, 0, 0);
    endDt = new Date(endDt).setHours(0, 0, 0, 0);
    this.currentDate.setHours(0, 0, 0, 0);
    var truthValue = true;

    if(new Date(strDt).getTime() > this.currentDate.getTime()){
      truthValue = false;
    }

    if (new Date(endDt).getTime() > new Date(strDt).getTime()) {
      const payload: Rental = {
        rentalID: '',
        firstName: this.userInfo.firstName,
        lastName: this.userInfo.lastName,
        address: this.userInfo.address,
        email: this.userInfo.email,
        contactNumber: this.userInfo.contactNumber,
        carID: this.car.carID,
        rentStartDate: this.f.rStartDate.value,
        rentEndDate: this.f.rEndDate.value,
        rentStatus: truthValue,
      };
      this.rservice.addRental(payload);
      this.rentStatus.emit(false);
    } else {
      this.isNotRentable = true;
    }
    this.sent = true;

  }
}
