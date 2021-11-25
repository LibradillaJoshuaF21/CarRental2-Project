import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthUser } from '../auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth, 
    public router: Router,  
    public ngZone: NgZone,
  ) { 
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || '');
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user') || '');
      }
    })
  }

  SignIn(email: any, password: any) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
    .then ((result) => {
      this.storeRole();
      this.ngZone.run(() => {
        this.router.navigate(['admin']);
        this.SetUserData(result.user);
      });
    }).catch((error) => {
      window.alert(error.message)
    });
  }

  SignUp(email: any, password: any) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then ((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['admin']);
        this.SetUserData(result.user);
      });
    }).catch((error) => {
      window.alert(error.message)
    });
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('isAdmin');
      this.router.navigate(['']);
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '');
    return (user !== null) ? true : false;
  }

  get isAdmin(): boolean {
    const role = JSON.parse(localStorage.getItem('isAdmin') || '');
    return role;
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

  storeRole() {
    this.afAuth.authState.subscribe( user => {
      if (user) {
        this.afs.collection('user').doc(user.uid).get().subscribe(result => {
          if (result) {
            localStorage.setItem('isAdmin', result.get('isAdmin'));
          }
        });
      }
    })
  }

}
