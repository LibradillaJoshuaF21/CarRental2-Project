import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarsService } from 'src/app/shared/car/cars.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  @Input('sendCarList') carList: any;
  @Output() selectedCar = new EventEmitter<number>();

  displayList = [] as any;
  
  p: number = 1;
  count: number = 4;

  constructor(private cservice: CarsService) {
    
   }

  ngOnInit(): void {

  }

  ngOnChanges(){
    this.displayList = this.carList;
  }

  onEdit(carID: number){
    this.selectedCar.emit(carID);
  }

  onChangeBrand(event: any){
    this.displayList = this.cservice.sortByBrand(event.target.value, this.carList);
    this.p = 1;
  }

  onChangeType(event: any){
    this.displayList = this.cservice.sortByType(event.target.value, this.carList);
    this.p = 1;
  }

  onChangeTransmission(event: any){
    this.displayList = this.cservice.sortByTransmission(event.target.value, this.carList);
    this.p = 1;
  }

  onChangeSeats(event: any){
    this.displayList = this.cservice.sortBySeats(event.target.value, this.carList);
    this.p = 1;
  }

  displayAll(){
    this.displayList = this.carList;
    this.p = 1;
  }
}
