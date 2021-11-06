import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RentalsService } from 'src/app/shared/rental/rentals.service';

@Component({
  selector: 'app-reserve-list',
  templateUrl: './reserve-list.component.html',
  styleUrls: ['./reserve-list.component.css']
})
export class ReserveListComponent implements OnInit {

  @Input('sendRentalList') rentalList: any;
  @Output() selectedRental = new EventEmitter<number>();

  p: number = 1;
  count: number = 3;

  constructor(private rservice: RentalsService) { }

  ngOnInit(): void {

  }

  onEdit(i: number){
    this.selectedRental.emit(i);
  }

}
