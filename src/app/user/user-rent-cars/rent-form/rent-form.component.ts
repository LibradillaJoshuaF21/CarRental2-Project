import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Car } from 'src/app/shared/car/car';

@Component({
  selector: 'app-rent-form',
  templateUrl: './rent-form.component.html',
  styleUrls: ['./rent-form.component.css']
})
export class RentFormComponent implements OnInit {

  @Input('sendCarInfo') car!: Car;
 
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
    startDate:['', {
      validators: [Validators.required],
    }],
    endDate:['', {
      validators: [Validators.required],
    }],

  })
    


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.rentForm = this.fb.group({
      cModel: [this.car.model, Validators.required],
      cBrand: [this.car.brand, Validators.required],
      cType: [this.car.type, Validators.required],
      cTransmission: [this.car.transmission, Validators.required],
      cSeats: [this.car.seats, Validators.required],

    });
  }

  get f(){return this.rentForm.controls}

  onSubmit(){
    console.log(this.f.startDate.value);
    console.log(this.f.carName.value);
  }
}
