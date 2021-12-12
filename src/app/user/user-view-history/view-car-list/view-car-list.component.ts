import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HistoryService } from 'src/app/shared/rent-history/history.service';
import { RentHistory } from 'src/app/shared/rent-history/history';
import { User } from 'src/app/shared/user/user';

@Component({
  selector: 'app-view-car-list',
  templateUrl: './view-car-list.component.html',
  styleUrls: ['./view-car-list.component.css']
})
export class ViewCarListComponent implements OnInit {

 
  @Input('sendHistoryList') historyList!: RentHistory [];
  @Input('sendUserInfo') userInfo!: User;
  
  @Output() selectedHistory = new EventEmitter<number>();

  displayList = [] as any;

  p: number = 1;
  count: number = 4;

  constructor(private rhservice: HistoryService) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(): void{
    this.displayList = this.rhservice.getUserHistoryList(this.userInfo.userID, this.historyList);
  }

  onDetail(rentID: any){
    this.selectedHistory.emit(rentID);
  }

}
