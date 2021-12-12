import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RentalsService } from 'src/app/shared/rental/rentals.service';
import { Rental } from 'src/app/shared/rental/rental';
import { User } from 'src/app/shared/user/user';

@Component({
  selector: 'app-reserve-list',
  templateUrl: './reserve-list.component.html',
  styleUrls: ['./reserve-list.component.css']
})
export class ReserveListComponent implements OnInit {

  @Input('sendRentalList') rentalList: any;

  @Output() selectedRental = new EventEmitter<number>();

  p: number = 1;
  count: number = 4;

  constructor(private rservice: RentalsService) { }

  ngOnInit(): void {

  }

  ngOnChanges():void{
  }

  onEdit(rentID: any){
    this.selectedRental.emit(rentID);
  }

}
