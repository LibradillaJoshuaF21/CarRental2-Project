import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  @Output() rentStatus = new EventEmitter<boolean>();

  result = "Results Here";

  sent = false;
 
  rentForm = this.fb.group({

    uFirstName: ['', {
      validators: [Validators.required],
    }],
    uLastName: ['', {
      validators: [Validators.required],
    }],
    uAddress: ['', {
      validators: [Validators.required],
    }],
    uEmail: ['', {
      validators: [Validators.required, Validators.email], 
    }],
    uContactNum: ['', {
      validators: [Validators.required],
    }],
    cModel: ['', {
      validators: [Validators.required],
    }],
    cBrand: ['', {
      validators: [Validators.required],
    }],
    cType: ['', {
      validators: [Validators.required],
    }],
    cTransmission: ['', {
      validators: [Validators.required],
    }],
    cSeats: ['', {
      validators: [Validators.required],
    }],
    rStartDate:['', {
      validators: [Validators.required],
    }],
    rEndDate:['', {
      validators: [Validators.required],
    }],
  })
    


  constructor(private fb: FormBuilder, private rservice: RentalsService) { }

  ngOnInit(): void {
    this.rentForm = this.fb.group({
      uFirstName: [''],
      uLastName:[''],
      uAddress:[''],
      uEmail:[''],
      uContactNum: [''],
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
      uFirstName: [''],
      uLastName:[''],
      uAddress:[''],
      uEmail:[''],
      uContactNum: [''],
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
      firstName: '',
      lastName:'',
      address: '',
      email: '',
      contactNumber: 0,
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
