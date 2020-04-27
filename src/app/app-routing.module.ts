import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import { OrderWizardComponent } from './order/order-wizard/order-wizard.component';
import { OrderListComponent } from './order/order-list/order-list.component';

const routes: Routes = [
  { path: '', component: CustomerListComponent },
  {
    path: 'customer',
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
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: OrderListComponent },
      { path: 'details/:id', component: OrderDetailsComponent },
      { path: 'edit/:id', component: OrderWizardComponent },
      { path: 'new', component: OrderWizardComponent },
    ],
  },
  { path: '*', redirectTo: 'customer', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
