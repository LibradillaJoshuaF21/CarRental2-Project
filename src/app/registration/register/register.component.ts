import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/user/users.service';
import { User } from 'src/app/shared/user/user';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  userList = [] as any;
  isDuplicate = false;

  addUserForm = this.fb.group({
    fname: ['',{
      validators: [Validators.required],
    }],
    lname: ['',{
      validators: [Validators.required],
    }],
    address: ['',{
      validators: [Validators.required],
    }],
    email: ['',{
      validators: [Validators.required, Validators.email],
    }],
    contactnum: ['',{
      validators: [Validators.required, Validators.pattern("^[0-9]*$")],
    }],
    rpassword: ['',{
      validators: [Validators.required, Validators.minLength(6)],
    }],
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

  onSubmit(){
    if(!(this.uservice.checkDuplicate(this.f.email.value, this.userList))){
      const userEmail = this.f.email.value;
      var bcrypt = require('bcryptjs');
      var hash = bcrypt.hashSync('bacon', 8);
      const payload: User = {
        userID: '',
        firstName: this.f.fname.value,
        lastName: this.f.lname.value,
        address: this.f.address.value,
        email: this.f.email.value,
        contactNumber: this.f.contactnum.value,
        password: hash,
      };
        this.uservice.addUser(payload);
        this.isDuplicate = false;

        this.authService.SignUp(userEmail, this.f.rpassword.value);

        this.addUserForm.reset();
    }
    else {
      this.isDuplicate = true;
    }
  }

  get f(){
    return this.addUserForm.controls;
  }
}
