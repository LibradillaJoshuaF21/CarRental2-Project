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


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminDoCarsComponent,
    CarListComponent,
    CarAddComponent,
    CarEditComponent,
    CarDeleteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    NgxPaginationModule,

  ]
})
export class AdminModule { }
