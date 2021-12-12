import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CarsService } from 'src/app/shared/car/cars.service';
import { RentHistory } from 'src/app/shared/rent-history/history';
import { HistoryService } from 'src/app/shared/rent-history/history.service';


@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  @Input('sendHistoryDetail') HistoryDetail!: any;
  @Input('sendHistoryList') historyList!: RentHistory [];
  @Input('sendUserInfo') userInfo!: any;
  @Input('sendCarList') carList!: any;
  @Output() detailStatus = new EventEmitter<boolean>();

  userHistoryList = [] as any;

  specificCar = [] as any;

  constructor(private cservice: CarsService, private rhservice: HistoryService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.userHistoryList = this.rhservice.getUserHistoryList(this.userInfo.userID, this.historyList)
    this.specificCar = this.cservice.getSpecificCar(this.HistoryDetail.carID, this.carList); 
  }

}
