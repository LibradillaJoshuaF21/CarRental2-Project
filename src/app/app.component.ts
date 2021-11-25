import { Component } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarRental2';

  userLogIn = true;
  adminLogIn = false;

  constructor( private authService: AuthService){};

  logOut(){
    this.authService.SignOut();
  }
}
