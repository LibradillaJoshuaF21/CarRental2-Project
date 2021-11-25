import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

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
    .then (user => {
      this.ngZone.run(() => {
        this.router.navigate(['admin']);
      });
    }).catch((error) => {
      window.alert(error.message)
    });
    
  }

  SignUp(email: any, password: any) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then (user => {
      this.ngZone.run(() => {
        this.router.navigate(['']);
      });
    }).catch((error) => {
      window.alert(error.message)
    });
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['']);
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '');
    return (user !== null) ? true : false;
  }

  
}
