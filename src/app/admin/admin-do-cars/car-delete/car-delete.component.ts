import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarsService } from 'src/app/shared/car/cars.service';
import { PopupService } from 'src/app/shared/notification/popup.service';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css']
})
export class CarDeleteComponent implements OnInit {

  @Input('sendCarID') carID!: string;
  @Output() editStatus = new EventEmitter<boolean>();

  constructor(
    private cservice: CarsService,
    private pop: PopupService,) { }

  ngOnInit(): void {
    
  }

  onDelete(){
    this.cservice.removeCar(this.carID);
    this.pop.carRemoved();
    this.editStatus.emit(false);
  }
}
