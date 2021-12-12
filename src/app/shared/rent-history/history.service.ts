import { Injectable } from '@angular/core';
import { RentHistory } from './history';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private rentHistoryCollection: AngularFirestoreCollection<RentHistory>;
  rentHistories!: Observable<RentHistory[]>;

  constructor(private afs: AngularFirestore) { 
    this.rentHistoryCollection = this.afs.collection<RentHistory>('Rent Histories');
    this.rentHistories = this.rentHistoryCollection.valueChanges();
  }

  addRentHistory(rental: RentHistory){
    const pushkey = this.afs.createId();
    rental.rentID = pushkey;
    this.rentHistoryCollection.doc(pushkey).set(rental);
  }

  getRentHistoryList(){
    return this.rentHistories;
  }

  getUserHistoryList(userID: string, historyList: RentHistory []){
    return historyList.filter( history => history.userID === userID)
  }

  getSpecificRentHistory(rentalID: string, rentalList: RentHistory []){
    return rentalList.find( rental => rental.rentID === rentalID);
  }
}
