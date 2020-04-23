import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';

const routes: Routes = [
  { path: '', component: CustomerListComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'customer-details/:id', component: CustomerDetailsComponent },
  { path: 'customer-edit/:id', component: CustomerEditComponent },
  { path: 'customer-new', component: CustomerEditComponent },
  { path: 'order-details/:id', component: OrderDetailsComponent },
  { path: '*', redirectTo: 'customer-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
