import { Injectable } from '@angular/core';
import { User } from './user';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private userCollection: AngularFirestoreCollection<User>;
  users!: Observable<User[]>;

  constructor(private afs: AngularFirestore) { 
    this.userCollection = this.afs.collection<User>('Users');
    this.users = this.userCollection.valueChanges();
  }

  addUser(user: User){
    const pushkey = this.afs.createId();
    user.userID = pushkey;
    this.userCollection.doc(pushkey).set(user);
  }

  getUser(){
    return this.users;
  }

  modifyUser(userID: string, userChanges: User){
    this.userCollection.doc(userID).update(userChanges);
  }

  removeUser(userID: string,){
    this.userCollection.doc(userID).delete();
  }

  checkDuplicate(email: string, userList: User[]){
    return userList.some( user => user.email === email)
  }

  getUserIndex(userEmail: any, userList: User[]){
    return userList.findIndex( user => user.email == userEmail)
  } 

  getSpecificUser(userID: string, userList: User[]){
    return userList.find( user => user.userID === userID)
  }
}
