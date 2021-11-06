import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RentalsService } from 'src/app/shared/rental/rentals.service';

@Component({
  selector: 'app-reserve-delete',
  templateUrl: './reserve-delete.component.html',
  styleUrls: ['./reserve-delete.component.css']
})
export class ReserveDeleteComponent implements OnInit {

  @Input('sendRentalID') rentalID!: string;
  @Output() editStatus = new EventEmitter<boolean>()

  constructor(private rservice: RentalsService) { }

  ngOnInit(): void {
  }

  onDeleteRent(){
    this.rservice.removeRental(this.rentalID);
    this.editStatus.emit(false);
  }

}
