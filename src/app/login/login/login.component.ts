import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/user/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userList = [] as any;

  loginForm = this.fb.group({
    username: ['',{
      validators: [Validators.required]
    }], 
    password: ['',{
      validators: [Validators.required]
    }]
  });

  constructor(private fb: FormBuilder, private uservice: UsersService) { }

  ngOnInit(): void {
    this.uservice.getUser().subscribe((val) => {
      this.userList = val;
    });

  }

  get f(){return this.loginForm.controls;}

  onSubmit(){
    
  }

}
