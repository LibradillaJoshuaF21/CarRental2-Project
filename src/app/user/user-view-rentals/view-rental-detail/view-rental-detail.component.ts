import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CarsService } from 'src/app/shared/car/cars.service';
import { Rental } from 'src/app/shared/rental/rental';
import { RentalsService } from 'src/app/shared/rental/rentals.service';

@Component({
  selector: 'app-view-rental-detail',
  templateUrl: './view-rental-detail.component.html',
  styleUrls: ['./view-rental-detail.component.css']
})
export class ViewRentalDetailComponent implements OnInit {

  @Input('sendRentalDetail') rentalDetail!: any;
  @Input('sendRentalList') rentalList!: Rental [];
  @Input('sendUserInfo') userInfo!: any;
  @Input('sendCarList') carList!: any;
  @Output() detailStatus = new EventEmitter<boolean>();

  userRentalList = [] as any;
  specificCar = [] as any;
  currentDate = new Date().setHours(0, 0, 0, 0);


  cancel = true;

  constructor(private cservice: CarsService, private rservice: RentalsService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.userRentalList = this.rservice.getUserRentalList(this.userInfo.userID, this.rentalList)
    this.specificCar = this.cservice.getSpecificCar(this.rentalDetail.carID, this.carList);

    var cancelDt = this.rentalDetail.rentStartDate;
    cancelDt = new Date(cancelDt);  
    cancelDt.setDate(cancelDt.getDate() - 7);
    cancelDt = new Date(cancelDt).setHours(0, 0, 0, 0);

    if(this.currentDate < cancelDt){
      this.cancel = false;  
    }
    else{
      this.cancel = true;
    }
  }

  onClose(){
    this.detailStatus.emit(false);
  }

  onCancelReservation(status: any){
    this.detailStatus.emit(status);
  }

}
