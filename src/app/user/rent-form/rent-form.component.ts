import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rent-form',
  templateUrl: './rent-form.component.html',
  styleUrls: ['./rent-form.component.css']
})
export class RentFormComponent implements OnInit {

  rentDetail = this.fb.group({
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get f(){return this.rentDetail.controls}

  onSubmit(){
    console.log(this.f.startDate.value);
    console.log(this.f.carName.value);
  }
}
