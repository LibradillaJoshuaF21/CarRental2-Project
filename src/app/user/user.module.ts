import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { UserHomeComponent } from './user-home/user-home.component';
import { RentFormComponent } from './user-rent-cars/rent-form/rent-form.component';
import { UserRentCarsComponent } from './user-rent-cars/user-rent-cars.component';
import { RentCarListComponent } from './user-rent-cars/rent-car-list/rent-car-list.component';
import { UserViewRentalsComponent } from './user-view-rentals/user-view-rentals.component';
import { UserViewHistoryComponent } from './user-view-history/user-view-history.component';
import { ViewCarListComponent } from './user-view-history/view-car-list/view-car-list.component';
import { ViewDetailComponent } from './user-view-history/view-detail/view-detail.component';
import { ViewRentalsListComponent } from './user-view-rentals/view-rentals-list/view-rentals-list.component';
import { ViewRentalDetailComponent } from './user-view-rentals/view-rental-detail/view-rental-detail.component';
import { RentalCancelComponent } from './user-view-rentals/rental-cancel/rental-cancel.component';

@NgModule({
  declarations: [
    UserHomeComponent,
    RentFormComponent,
    UserRentCarsComponent,
    RentCarListComponent,
    UserViewRentalsComponent,
    UserViewHistoryComponent,
    ViewCarListComponent,
    ViewDetailComponent,
    ViewRentalsListComponent,
    ViewRentalDetailComponent,
    RentalCancelComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    NgxPaginationModule,
  ]
})
export class UserModule { }
