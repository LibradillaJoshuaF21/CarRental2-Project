import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  @Input('sendCarList') carList: any;
  @Output() selectedCar = new EventEmitter<number>();

  p: number = 1;
  count: number = 4;

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(i: number){
    this.selectedCar.emit(i);
  }


}
