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
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  id: any;
  order: Order;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private productService: ProductService,
    private customerService: CustomerService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  deleteOrder(event) {
    const dialogData = new ConfirmDialogModel('Confirm Action', 'Are you sure young want to delete order?');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      const result = dialogResult;

      if (result) {
        this.orderService.deleteOrder(this.order.id.toString()).subscribe(async () => {
          this.snackBar.open('order ' + this.order.name + ' deleted', null, {
            duration: 5000,
          });
          this.router.navigate(['/customer/details', this.order.customerId]);
        });
      }
    });
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.orderService.getOrder(this.id).subscribe(async (orders: Order[]) => {
      let order = orders[0];
      this.order = order;

      let products = await this.productService.getProduct(order.productId.toString()).toPromise();
      let product = products[0];
      order.name = product.name;
      order.manufacturer = product.manufacturer;
      order.price = product.price;
      order.totalPrice = order.amount * Number(order.price);

      let customers = await this.customerService.getCustomer(order.customerId.toString()).toPromise();
      customers = customers as Customer[];
      let customer = customers[0];
      order.customerName = customer.firstName + ' ' + customer.lastName;
    });
  }
}
