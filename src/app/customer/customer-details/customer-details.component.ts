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
    private customerService: CustomerService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  deleteCustomer(event) {
    const dialogData = new ConfirmDialogModel('Confirm Action', 'Are you sure young want to delete customer?');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      const result = dialogResult;

      if (result) {
        this.customerService.deleteCustomer(this.customer.id.toString()).subscribe(async () => {
          this.snackBar.open('Customer ' + this.customer.firstName + ' ' + this.customer.lastName + ' deleted', null, {
            duration: 5000,
          });
          this.router.navigate(['']);
        });
      }
    });
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.customerService.getCustomer(this.id).subscribe(async (customers: Customer[]) => {
      let customer = customers[0];
      customer.orders = await this.customerService.getAllOrdersOfCustomer(this.id);
      this.customer = customer;
    });
  }
}
