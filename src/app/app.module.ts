import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerModule } from 'src/app/customer/customer.module';
import { SharedModule } from './shared/shared.module';
import { CustomerListComponent } from './customer/customer-list';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './common-components/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OrderDetailsComponent } from './order/order-details/order-details.component';
import { OrderModule } from './order/order.module';
import { OrderEditComponent } from './order/order-edit/order-edit.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    CustomerEditComponent,
    ConfirmDialogComponent,
    OrderDetailsComponent,
    OrderEditComponent,
    OrderListComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CustomerModule,
    OrderModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    NgbModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
