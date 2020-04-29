import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import { OrderEditComponent } from './order/order-edit/order-edit.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './shared/services/authentication/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'customer',
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: CustomerListComponent },
      { path: 'details/:id', component: CustomerDetailsComponent },
      { path: 'edit/:id', component: CustomerEditComponent },
      { path: 'new', component: CustomerEditComponent },
    ],
  },
  {
    path: 'order',
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: OrderListComponent },
      { path: 'details/:id', component: OrderDetailsComponent },
      { path: 'edit/:id', component: OrderEditComponent },
      { path: 'new', component: OrderEditComponent },
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '*', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
