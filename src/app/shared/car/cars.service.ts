import { Injectable } from '@angular/core';
import { Car } from './car';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private carCollection: AngularFirestoreCollection<Car>;
  cars!: Observable<Car[]>;

  constructor(private afs: AngularFirestore) { 
    this.carCollection = this.afs.collection<Car>('Cars');
    this.cars = this.carCollection.valueChanges();
  }

  addCar(car: Car){
    const pushkey = this.afs.createId();
    car.carID = pushkey;
    this.carCollection.doc(pushkey).set(car);
  }

  getCar(){
    return this.cars;
  }

  modifyCar(carID: string, carChanges: Car){
    this.carCollection.doc(carID).update(carChanges);
  }

  removeCar(carID: string,){
    this.carCollection.doc(carID).delete();
  }
}
