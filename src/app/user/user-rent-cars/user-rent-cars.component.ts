import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/shared/car/cars.service';

@Component({
  selector: 'app-user-rent-cars',
  templateUrl: './user-rent-cars.component.html',
  styleUrls: ['./user-rent-cars.component.css']
})
export class UserRentCarsComponent implements OnInit {

  carList = [] as any;
  renting = false;
  rentCarIndex!: number;

  constructor(private cservice: CarsService) { }

  ngOnInit(): void {
    this.cservice.getCar().subscribe((val) => {
      this.carList = val;
    });
  }

  onRent(index: any){
    this.renting = true;
    this.rentCarIndex = index;
  }

  rentComplete(value: any){
    this.renting = value;
    this.rentCarIndex = null as any;
  }
}
