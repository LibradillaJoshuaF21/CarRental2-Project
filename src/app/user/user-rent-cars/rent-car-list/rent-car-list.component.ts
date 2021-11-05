import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rent-car-list',
  templateUrl: './rent-car-list.component.html',
  styleUrls: ['./rent-car-list.component.css']
})
export class RentCarListComponent implements OnInit {

  @Input('sendCarList') carList: any;
  @Output() selectedCar = new EventEmitter<number>();

  p: number = 1;
  count: number = 4;

  constructor() { }

  ngOnInit(): void {
  }

  onRent(i: number){
    this.selectedCar.emit(i);
  }

}
