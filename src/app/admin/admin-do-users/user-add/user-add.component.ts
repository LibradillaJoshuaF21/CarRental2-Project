import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/user/users.service';
import { User } from 'src/app/shared/user/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userList = [] as any;
  isDuplicate = false;

  addUserForm = this.fb.group({
    uname: ['',{
      validators: [Validators.required],
    }],
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

  constructor(private fb: FormBuilder, private uservice: UsersService) { }

  ngOnInit(): void {
    this.uservice.getUser().subscribe((val) => {
      this.userList = val;
    });
  }

  onSubmit(){
    if(!(this.uservice.checkDuplicate(this.f.uname.value, this.userList))){
      const payload: User = {
        userID: '',
        username: this.f.uname.value,
        firstName: this.f.fname.value,
        lastName: this.f.lname.value,
        address: this.f.address.value,
        email: this.f.email.value,
        contactNumber: this.f.contactnum.value,
        password: this.f.rpassword.value
      };
        this.uservice.addUser(payload);
        this.isDuplicate = false;
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
