import { Injectable } from '@angular/core';
import { Reservation } from './reservation';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservesService {

  private reservesCollection: AngularFirestoreCollection<Reservation>;
  reserves!: Observable<Reservation[]>;

  constructor(private afs: AngularFirestore) { 
    this.reservesCollection = this.afs.collection<Reservation>('Reservations');
    this.reserves = this.reservesCollection.valueChanges();
  }

  addReservation(reservation: Reservation){
    const pushkey = this.afs.createId();
    reservation.reserveID = pushkey;
    this.afs.doc(pushkey).set(reservation);
  }

  getReservations(){
    return this.reserves;
  }

  removeReservation(reserveID: string,){
    this.reservesCollection.doc(reserveID).delete();
  }

  checkReservationList(cardID: string){ // NOT WORKING, RETURNs UNDEFINED
    this.reserves.subscribe(something => something.forEach( something2 =>{
      if(something2.carID == cardID){
        return false;
      }
      else {
        return true;
      }
    }))
  }
}
