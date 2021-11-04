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

  addRentHistory(rentHistory: RentHistory){
    const pushkey = this.afs.createId();
    rentHistory.rentID = pushkey;
    this.afs.doc(pushkey).set(rentHistory);
  }

  getRentList(){
    return this.rentHistories;
  }
}
