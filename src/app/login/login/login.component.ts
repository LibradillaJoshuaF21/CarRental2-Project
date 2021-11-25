import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/user/users.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userList = [] as any;

  loginForm = this.fb.group({
    email: ['',{
      validators: [Validators.required, Validators.email]
    }], 
    password: ['',{
      validators: [Validators.required]
    }]
  });

  constructor(
    private fb: FormBuilder, 
    private uservice: UsersService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.uservice.getUser().subscribe((val) => {
      this.userList = val;
    });

  }

  get f(){return this.loginForm.controls;}

  onSubmit(){
    const inputEmail = this.f.email.value;
    const inputPassword = this.f.password.value;
    this.authService.SignIn(inputEmail,inputPassword);
  }

  clearAll(){
    this.authService.SignOut();
  }

}
