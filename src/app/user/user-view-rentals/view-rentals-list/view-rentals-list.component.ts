import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Rental } from 'src/app/shared/rental/rental';
import { RentalsService } from 'src/app/shared/rental/rentals.service';
import { User } from 'src/app/shared/user/user';

@Component({
  selector: 'app-view-rentals-list',
  templateUrl: './view-rentals-list.component.html',
  styleUrls: ['./view-rentals-list.component.css']
})
export class ViewRentalsListComponent implements OnInit {

  @Input('sendRentalList') rentalList!: Rental [];
  @Input('sendUserInfo') userInfo!: User;

  @Output() selectedRental = new EventEmitter<number>();

  displayList = [] as any;

  p: number = 1;
  count: number = 4;

  constructor(private rservice: RentalsService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.displayList = this.rservice.getUserRentalList(this.userInfo.userID, this.rentalList);
  }

  onDetail(rentalID: any){
    this.selectedRental.emit(rentalID);
  }

}
