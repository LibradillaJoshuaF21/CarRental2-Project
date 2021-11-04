import { Injectable } from '@angular/core';
import { Rental } from './rental';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalsService {

  private rentCollection: AngularFirestoreCollection<Rental>;
  rent!: Observable<Rental[]>;

  constructor(private afs: AngularFirestore) { 
    this.rentCollection = this.afs.collection<Rental>('Rents');
    this.rent = this.rentCollection.valueChanges();
  }

  addRent(rent: Rental){
    const pushkey = this.afs.createId();
    rent.rentID = pushkey;
    this.afs.doc(pushkey).set(rent);
  }

  getRentList(){
    return this.rent;
  }

  removeRent(rentID: string,){
    this.rentCollection.doc(rentID).delete();
  }

  checkRentList(cardID: string){ // NOT WORKING, RETURNs UNDEFINED
    this.rent.subscribe(something => something.forEach( something2 =>{
      if(something2.carID == cardID){
        return false;
      }
      else {
        return true;
      }
    }))
  }
}
