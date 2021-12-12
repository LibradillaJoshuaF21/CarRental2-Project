import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/user/users.service';
import { CarsService } from 'src/app/shared/car/cars.service';
import { RentalsService } from 'src/app/shared/rental/rentals.service';
import { Rental } from 'src/app/shared/rental/rental';
import { PopupService } from 'src/app/shared/notification/popup.service';
import { RentHistory } from 'src/app/shared/rent-history/history';
import { HistoryService } from 'src/app/shared/rent-history/history.service';


@Component({
  selector: 'app-reserve-add',
  templateUrl: './reserve-add.component.html',
  styleUrls: ['./reserve-add.component.css']
})
export class ReserveAddComponent implements OnInit {

  @Input('sendCarList') carList: any;


  availableCarList = [] as any;
  userList = [] as any;
  currentDate = new Date();
  isNotRentable = false;
  rentalList = [] as any;
  userIndex!: any;
  userInfo!: any;
  carMod!: any;

  
  addReserveForm = this.fb.group({
    userEmail: ['',{
      validators: [Validators.required, Validators.email],
    }],
    selectedCar: ['',{
      validators: [Validators.required],
    }],
    rStartDate:['', {
      validators: [Validators.required],
    }],
    rEndDate:['', {
      validators: [Validators.required],
    }],
  });

  constructor(
    private uservice: UsersService,
    private cservice: CarsService,
    private rservice: RentalsService,
    private rhservice: HistoryService,
    private fb: FormBuilder,
    private pop: PopupService,
  ) {
      
  }

  ngOnInit(): void {
    this.rservice.getRentalList().subscribe((val) => {
      this.rentalList = val;
    });
    this.uservice.getUser().subscribe((val) => {
      this.userList = val;
    });
  }

  ngOnChanges() {
    this.availableCarList = this.cservice.sortAvailableCars(this.carList);
    this.addReserveForm = this.fb.group({
      userEmail: ['',{
        validators: [Validators.required, Validators.email],
      }],
      selectedCar: ['',{
        validators: [Validators.required],
      }],
      rStartDate:['', {
        validators: [Validators.required],
      }],
      rEndDate:['', {
        validators: [Validators.required],
      }],
    });
  }

  onSubmit(){
    this.userIndex = this.uservice.getUserIndex(this.f.userEmail.value, this.userList);
    this.userInfo = this.userList[this.userIndex];
    this.carMod = this.cservice.getSpecificCar(this.f.selectedCar.value, this.carList)?.model;
    var strDt = this.f.rStartDate.value;
    var endDt = this.f.rEndDate.value;
    strDt = new Date(strDt).setHours(0,0,0,0);
    endDt = new Date(endDt).setHours(0,0,0,0);
    this.currentDate.setHours(0,0,0,0);
    var truthValue = false;

    if(this.uservice.checkDuplicate(this.f.userEmail.value, this.userList)){
      if(new Date(strDt).getTime() > this.currentDate.getTime() && new Date(endDt).getTime() > new Date(strDt).getTime()){
        const payload: Rental = {
          rentalID: '',
          userID: this.userInfo.userID,
          firstName: this.userInfo.firstName,
          lastName: this.userInfo.lastName,
          address: this.userInfo.address,
          email: this.userInfo.email,
          contactNumber: this.userInfo.contactNumber,
          carID: this.f.selectedCar.value,
          carModel: this.carMod,
          rentStartDate: this.f.rStartDate.value,
          rentEndDate: this.f.rEndDate.value,
          rentStatus: truthValue,
        };
        const payload2: RentHistory = {
          rentID: '',
          userID: this.userInfo.userID,
          firstName: this.userInfo.firstName,
          lastName: this.userInfo.lastName,
          address: this.userInfo.address,
          email: this.userInfo.email,
          contactNumber: this.userInfo.contactNumber,
          carID: this.f.selectedCar.value,
          carModel: this.carMod,
          rentStartDate: this.f.rStartDate.value,
          rentEndDate: this.f.rEndDate.value,
          rentStatus: truthValue,
        };

        if(this.rservice.canRent(this.f.rStartDate.value, this.f.selectedCar.value, this.rentalList)){
          this.rservice.addRental(payload);
          this.rhservice.addRentHistory(payload2);
          this.addReserveForm.reset();
          this.pop.rentSuccess();
        } else {
          this.pop.alreadyRented();
        }
      } else {
        this.pop.invalidDateAdmin();
        this.addReserveForm.reset();
        this.isNotRentable = true;
      }
    } else {
      this.pop.emailNotFound();
      this.addReserveForm.reset();
    }
  }

  get f(){
    return this.addReserveForm.controls;
  }

}
