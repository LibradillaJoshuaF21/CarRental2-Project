import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CarsService } from 'src/app/shared/car/cars.service';
import { Car } from 'src/app/shared/car/car';
import { PopupService } from 'src/app/shared/notification/popup.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  @Input('sendCarInfo') car!: Car;
  @Output() editStatus = new EventEmitter<boolean>();

  editCarForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private cservice: CarsService,
    private pop: PopupService) { }

  ngOnInit(): void {
    this.editCarForm = this.fb.group({
      carID: [this.car.carID],
      cmodel: [this.car.model, Validators.required],
      cbrand: [this.car.brand, Validators.required],
      ctype: [this.car.type, Validators.required],
      transmission: [this.car.transmission, Validators.required],
      seats: [this.car.seats, Validators.required],
    });
  }

  ngOnChanges(): void {
    this.editCarForm = this.fb.group({
      carID: [this.car.carID],
      cmodel: [this.car.model, Validators.required],
      cbrand: [this.car.brand, Validators.required],
      ctype: [this.car.type, Validators.required],
      transmission: [this.car.transmission, Validators.required],
      seats: [this.car.seats, Validators.required],
    });
  }

  onSubmit(){
    const payload: Car = {
      carID: this.car.carID,
      model: this.f.cmodel.value,
      brand: this.f.cbrand.value,
      type: this.f.ctype.value,
      transmission: this.f.transmission.value,
      seats: this.f.seats.value,
      rentStatus: false
    };
    this.cservice.modifyCar(this.car.carID, payload);
    this.pop.editSuccess();
    this.editStatus.emit(false);
  }

  stopEditing(){
    this.editStatus.emit(false);
  }

  passEditStatus(status: any){
    this.editStatus.emit(status);
  }

  get f(){
    return this.editCarForm.controls;
  }

}
