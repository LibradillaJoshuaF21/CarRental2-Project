import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { UserHomeComponent } from './user-home/user-home.component';
import { RentFormComponent } from './rent-form/rent-form.component';


@NgModule({
  declarations: [
    UserHomeComponent,
    RentFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
