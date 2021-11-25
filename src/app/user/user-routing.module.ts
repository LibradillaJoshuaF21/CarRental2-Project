import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserRentCarsComponent } from './user-rent-cars/user-rent-cars.component';
import { UserViewHistoryComponent } from './user-view-history/user-view-history.component';
import { UserViewRentalsComponent } from './user-view-rentals/user-view-rentals.component';

const routes: Routes = [
  {
    path: 'home',
    component: UserHomeComponent, 
  },
  {
    path: 'rent',
    component: UserRentCarsComponent,
 
  },
  {
    path: 'rentals',
    component: UserViewRentalsComponent,

  },
  {
    path: 'history',
    component: UserViewHistoryComponent,

  },
  {
    path: '',
      component: UserHomeComponent,
  },
  {
    path: '**',
      //place NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
