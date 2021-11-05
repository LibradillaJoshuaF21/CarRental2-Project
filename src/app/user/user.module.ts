import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { UserHomeComponent } from './user-home/user-home.component';
import { RentFormComponent } from './user-rent-cars/rent-form/rent-form.component';
import { UserRentCarsComponent } from './user-rent-cars/user-rent-cars.component';
import { RentCarListComponent } from './user-rent-cars/rent-car-list/rent-car-list.component';

@NgModule({
  declarations: [
    UserHomeComponent,
    RentFormComponent,
    UserRentCarsComponent,
    RentCarListComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    NgxPaginationModule,
  ]
})
export class UserModule { }
