import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PopupService } from 'src/app/shared/notification/popup.service';
import { RentalsService } from 'src/app/shared/rental/rentals.service';

@Component({
  selector: 'app-rental-cancel',
  templateUrl: './rental-cancel.component.html',
  styleUrls: ['./rental-cancel.component.css']
})
export class RentalCancelComponent implements OnInit {

  @Input('sendRentalID') rentalID!: string;
  @Input('isCancellable') cancel!: boolean;
  @Output() editStatus = new EventEmitter<boolean>()

  constructor(
    private rservice: RentalsService,
    private pop: PopupService) { }

  ngOnInit(): void {
  }

  onDeleteRent(){
    this.rservice.removeRental(this.rentalID);
    this.editStatus.emit(false);
    this.pop.rentCanceled();
  }

}
