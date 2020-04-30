import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/model/customer';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ConfirmDialogComponent,
  ConfirmDialogModel,
} from 'src/app/common-components/confirm-dialog/confirm-dialog.component';
import { Order } from 'src/app/shared/model/order';
import { Product } from 'src/app/shared/model/product';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { DatabaseService } from 'src/app/shared/services/database/database.service';
import { IndexedDatabaseService } from 'src/app/shared/services/database/indexed-database.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent implements OnInit {
  id: any;
  customer: Customer;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private databaseService: DatabaseService,
    private indexedDatabaseService: IndexedDatabaseService,
    private customerService: CustomerService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  deleteCustomer(event) {
    const dialogData = new ConfirmDialogModel('Confirm Action', 'Are you sure young want to delete customer?');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: { dialogData },
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      const result = dialogResult;

      if (result) {
        this.customerService.deleteCustomer(this.customer.id.toString());
        this.snackBar.open('Customer ' + this.customer.firstName + ' ' + this.customer.lastName + ' deleted', null, {
          duration: 5000,
        });
        this.router.navigate(['/customer/list']);
      }
    });
  }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.databaseService.requestCustomerFromDatabase(this.id);
    this.databaseService.requestOrderFromDatabase(this.id);
    this.registerDataEvents();
  }

  registerDataEvents() {
    this.databaseService.localCustomerDataLoaded.subscribe((customerData) => {
      this.fillCustomersData(customerData);
    });
    this.indexedDatabaseService.localCustomerDataLoaded.subscribe((localCustomerData) => {
      this.fillCustomersData(localCustomerData);
    });
  }

  fillCustomersData(localCustomersData) {
    this.customer = localCustomersData;
  }
}
