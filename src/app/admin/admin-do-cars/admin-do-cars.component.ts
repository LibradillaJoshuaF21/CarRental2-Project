import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/shared/car/cars.service';
@Component({
  selector: 'app-admin-do-cars',
  templateUrl: './admin-do-cars.component.html',
  styleUrls: ['./admin-do-cars.component.css']
})
export class AdminDoCarsComponent implements OnInit {

  carList = [] as any;
  editing = false;
  selectedCarInfo!: any;

  constructor(private cservice: CarsService) { }

  ngOnInit(): void {
    this.cservice.getCar().subscribe((val) => {
      this.carList = val;
    });
  }

  onEdit(carID: any) {
    this.editing = true;
    this.selectedCarInfo = this.cservice.getSpecificCar(carID, this.carList);
  }

  editComplete(value: any){
    this.editing = value;
    this.selectedCarInfo = null as any;
  }

}
