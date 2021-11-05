import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDoCarsComponent } from './admin-do-cars/admin-do-cars.component';
import { CarListComponent } from './admin-do-cars/car-list/car-list.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminDoCarsComponent,
    CarListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
