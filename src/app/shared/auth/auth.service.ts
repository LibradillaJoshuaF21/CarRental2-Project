import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthUser } from '../auth-user';
import { PopupService } from '../notification/popup.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth, 
    public router: Router,  
    private pop: PopupService,
  ) { 
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || '');
        
      } else {
        localStorage.setItem('user', 'null');
        localStorage.setItem('isAdmin', 'null');
        localStorage.setItem('currentEmail', 'null');
        JSON.parse(localStorage.getItem('user') || '');
      }
    })
  }

  SignIn(email: any, password: any) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
    .then (() => {
      this.storeRoleAndEmail();
    }).catch((error) => {
      window.alert(error.message);
    });
  }

  SignUp(email: any, password: any) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then ((result) => {
      this.SetUserData(result.user);
      this.router.navigate(['']);
      this.pop.userRegistered();
    }).catch((error) => {
      window.alert(error.message);
    });
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      this.pop.logOut();
      localStorage.removeItem('user');
      localStorage.removeItem('isAdmin');
      localStorage.removeItem('currentEmail');
      this.router.navigate(['']);
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '');
    return (user !== null) ? true : false;
  }

  get isAdmin(): boolean {
    const role = JSON.parse(localStorage.getItem('isAdmin') || '');
    return (role == true) ? true : false;
  }

  get userEmail(): String {
    const daEmail = JSON.parse(localStorage.getItem('currentEmail') || '');
    return daEmail;
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: AuthUser = {
      uid: user.uid,
      email: user.email,
      isAdmin: false,
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  storeRoleAndEmail() {
    this.afAuth.authState.subscribe( user => {
      if (user) {
        this.afs.collection('users').doc(user.uid).get().subscribe(result => {
          if (result) {
            localStorage.setItem('isAdmin', result.get('isAdmin'));
            localStorage.setItem('currentEmail', JSON.stringify(result.get('email')));
            if(result.get('isAdmin')){
              this.router.navigate(['admin']);
            } else {
              this.router.navigate(['user']);
            }
          }
        });
      }
    })
  }
}
