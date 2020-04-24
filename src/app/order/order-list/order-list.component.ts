import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/model/order';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { Product } from 'src/app/shared/model/product';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';
import { Customer } from 'src/app/shared/model/customer';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  loading: boolean = false;

  orders: Order[];
  allOrders: Order[];

  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private customerService: CustomerService
  ) {}

  filter(filterString: string, filterSelection: string) {
    this.orders = this.allOrders.filter(function (elem) {
      let filterValue;

      switch (filterSelection) {
        case 'name':
          filterValue = elem.name;
          break;
        default:
          filterValue = elem.name;
      }

      return filterValue.toUpperCase().includes(filterString.toUpperCase());
    });

    this.orders.sort((order1, order2) => (order1.name > order2.name ? 1 : -1));
  }

  async ngOnInit() {
    this.loading = true;

    let orders = await this.orderService.getAllOrders().toPromise();
    this.allOrders = orders as Order[];
    this.allOrders = this.allOrders.slice(0, 100);

    for (let order of this.allOrders) {
      let products = await this.productService.getProduct(order.productId.toString()).toPromise();
      products = products as Product[];
      let product = products[0];
      order.name = product.name;
      order.manufacturer = product.manufacturer;
      order.price = product.price;

      let customers = await this.customerService.getCustomer(order.customerId.toString()).toPromise();
      customers = customers as Customer[];
      let customer = customers[0];
      order.customerName = customer.firstName + ' ' + customer.lastName;
    }

    this.allOrders.sort((order1, order2) => (order1.name > order2.name ? 1 : -1));
    this.orders = this.allOrders;
    this.loading = false;
  }
}
