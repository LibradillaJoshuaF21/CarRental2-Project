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

  getUserRentalList(userID: string, rentalList: Rental[]){
    return rentalList.filter( rental => rental.userID === userID)
  }

  canRent(startDate: any, carID: String, rentList: Rental[]){
    let canRent = true;

    let filteredList = [] as any;
    let strDt = new Date(startDate).setHours(0,0,0,0);
    strDt = new Date(strDt).getTime();

    filteredList = rentList.filter(rental => rental.carID === carID);
    filteredList.some(function(rental: any) {
      let rentalSt = new Date(rental.rentStartDate).setHours(0,0,0,0);
      rentalSt = new Date(rentalSt).getTime();
      let rentalEd = new Date(rental.rentEndDate).setHours(0,0,0,0);
      rentalEd = new Date(rentalEd).getTime();
      if(strDt >= rentalSt && strDt <= rentalEd){
        canRent = false;
      }
    });
    return canRent;
  }

  getSpecificRent(rentalID: string, rentalList: Rental []){
    return rentalList.find( rental => rental.rentalID === rentalID);
  }
}
