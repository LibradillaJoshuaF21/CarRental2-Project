import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/shared/user/users.service';
import { User } from 'src/app/shared/user/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input('sendUserInfo') user!: User;
  @Output() editStatus = new EventEmitter<boolean>();

  editUserForm!: FormGroup;

  constructor(private fb: FormBuilder, private uservice: UsersService) { }

  ngOnInit(): void {
    this.editUserForm = this.fb.group({
      userID: [this.user.userID],
      uname: [this.user.username, Validators.required],
      fname: [this.user.firstName, Validators.required],
      lname: [this.user.lastName, Validators.required],
      address: [this.user.address, Validators.required],
      email: [this.user.email,{
        validators: [Validators.required, Validators.email],
      }],
      contactnum: [this.user.contactNumber,{
        validators: [Validators.required, Validators.pattern("^[0-9]*$")],
      }],
      rpassword: [this.user.password,{
        validators: [Validators.required, Validators.minLength(6)],
      }],
    });
  }

  ngOnChanges(): void {
    this.editUserForm = this.fb.group({
      userID: [this.user.userID],
      uname: [this.user.username, Validators.required],
      fname: [this.user.firstName, Validators.required],
      lname: [this.user.lastName, Validators.required],
      address: [this.user.address, Validators.required],
      email: [this.user.email,{
        validators: [Validators.required, Validators.email],
      }],
      contactnum: [this.user.contactNumber,{
        validators: [Validators.required, Validators.pattern("^[0-9]*$")],
      }],
      rpassword: [this.user.password,{
        validators: [Validators.required, Validators.minLength(6)],
      }],
    });
  }

  onSubmit(){
      const payload: User = {
        userID: this.user.userID,
        username: this.f.uname.value,
        firstName: this.f.fname.value,
        lastName: this.f.lname.value,
        address: this.f.address.value,
        email: this.f.email.value,
        contactNumber: this.f.contactnum.value,
        password: this.f.rpassword.value
      };
      this.uservice.modifyUser(this.user.userID, payload);
      this.editUserForm.reset();
  }

  stopEditing(){
    this.editStatus.emit(false);
  }

  passEditStatus(status: any){
    this.editStatus.emit(status);
  }

  get f(){
    return this.editUserForm.controls;
  }

}
