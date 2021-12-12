import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Rental } from 'src/app/shared/rental/rental';
import { CarsService } from 'src/app/shared/car/cars.service';
import { Car } from 'src/app/shared/car/car';

@Component({
  selector: 'app-reserve-detail',
  templateUrl: './reserve-detail.component.html',
  styleUrls: ['./reserve-detail.component.css']
})
export class ReserveDetailComponent implements OnInit {

  @Input('sendRentalInfo') rentalInfo!: any;
  @Input('sendCarList') carList!: Car[];
  @Output() editStatus = new EventEmitter<boolean>();


  specificCar = [] as any
  
  constructor(private cservice: CarsService) { }

  ngOnInit(): void {

  }

  ngOnChanges(): void{
    this.specificCar = this.cservice.getSpecificCar(this.rentalInfo.carID, this.carList);
  }

  stopEditing(){
    this.editStatus.emit(false);
  }

  passEditStatus(status: any){
    this.editStatus.emit(status);
  }

}
