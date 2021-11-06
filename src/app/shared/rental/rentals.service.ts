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
  rents!: Observable<Rental[]>;

  constructor(private afs: AngularFirestore) { 
    this.rentCollection = this.afs.collection<Rental>('Rentals');
    this.rents = this.rentCollection.valueChanges();
  }

  addRental(rental: Rental){
    const pushkey = this.afs.createId();
    rental.rentalID = pushkey;
    this.rentCollection.doc(pushkey).set(rental);
  }

  getRentalList(){
    return this.rents;
  }

  removeRental(rentID: string,){
    this.rentCollection.doc(rentID).delete();
  }

  sortRentList(rentalList: Rental[]){
    return rentalList.filter( rental => rental.rentStatus === true)
  }

  sortReservationList(rentalList: Rental[]){
    return rentalList.filter( rental => rental.rentStatus === false)
  }
}
