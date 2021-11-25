import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './registration/register/register.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { UserHomeComponent } from './user/user-home/user-home.component';



import { UserViewRentalsComponent } from './user/user-view-rentals/user-view-rentals.component';
import { UserRentCarsComponent } from './user/user-rent-cars/user-rent-cars.component';
import { UserViewHistoryComponent } from './user/user-view-history/user-view-history.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminDoUsersComponent } from './admin/admin-do-users/admin-do-users.component';
import { AdminDoCarsComponent } from './admin/admin-do-cars/admin-do-cars.component';
import { AdminDoReservationsComponent } from './admin/admin-do-reservations/admin-do-reservations.component';

const routes: Routes = [
  {
    path: 'userHome',
    component: UserHomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'userRent',
    component: UserRentCarsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'userRentals',
    component: UserViewRentalsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'userHistory',
    component: UserViewHistoryComponent, canActivate: [AuthGuard]
  },
  {
    path: 'adminHome',
    component: AdminHomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'adminUsers',
    component: AdminDoUsersComponent, canActivate: [AuthGuard]
  },
  {
    path: 'adminCars',
    component: AdminDoCarsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'adminReservations',
    component: AdminDoReservationsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule), canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((m) => m.UserModule), canActivate: [AuthGuard]
  },
  {
    path: 'registration',
    component: RegisterComponent,
  },
  {
    path: '',
    redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegisterComponent,]