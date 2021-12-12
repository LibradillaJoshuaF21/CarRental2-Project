import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  logOut(){
    alert("Logged Out.");
  };

  userRegistered(){
    alert("User Successfully Registered.");
  };

  editSuccess(){
    alert("Edit Successful.");
  };

  carAdded(){
    alert("Car Successfully Added.");
  };

  carRemoved(){
    alert("Car Successfully Removed.");
  };

  rentSuccess(){
    alert("Rent Successful.");
  };

  invalidDateAdmin(){
    alert("Invalid Date. Admin can only reserve on dates other than the current date.");
  };

  invalidDate(){
    alert("Invalid Date.");
  };

  alreadyRented(){
    alert("Vehicle Already Rented.");
  };
  
  emailNotFound(){
    alert("This email address does not exist.");
  };

  rentCanceled(){
    alert("Rent Canceled");
  }
}
