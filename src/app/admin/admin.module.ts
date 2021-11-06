import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDoCarsComponent } from './admin-do-cars/admin-do-cars.component';
import { CarListComponent } from './admin-do-cars/car-list/car-list.component';
import { CarAddComponent } from './admin-do-cars/car-add/car-add.component';
import { CarEditComponent } from './admin-do-cars/car-edit/car-edit.component';
import { CarDeleteComponent } from './admin-do-cars/car-delete/car-delete.component';
import { AdminDoUsersComponent } from './admin-do-users/admin-do-users.component';
import { UserAddComponent } from './admin-do-users/user-add/user-add.component';
import { UserDeleteComponent } from './admin-do-users/user-delete/user-delete.component';
import { UserEditComponent } from './admin-do-users/user-edit/user-edit.component';
import { UserListComponent } from './admin-do-users/user-list/user-list.component';
import { AdminDoReservationsComponent } from './admin-do-reservations/admin-do-reservations.component';
import { ReserveListComponent } from './admin-do-reservations/reserve-list/reserve-list.component';
import { ReserveAddComponent } from './admin-do-reservations/reserve-add/reserve-add.component';
import { ReserveDeleteComponent } from './admin-do-reservations/reserve-delete/reserve-delete.component';
import { ReserveDetailComponent } from './admin-do-reservations/reserve-detail/reserve-detail.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminDoCarsComponent,
    CarListComponent,
    CarAddComponent,
    CarEditComponent,
    CarDeleteComponent,
    AdminDoUsersComponent,
    UserAddComponent,
    UserDeleteComponent,
    UserEditComponent,
    UserListComponent,
    AdminDoReservationsComponent,
    ReserveListComponent,
    ReserveAddComponent,
    ReserveDeleteComponent,
    ReserveDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    NgxPaginationModule,

  ]
})
export class AdminModule { }
