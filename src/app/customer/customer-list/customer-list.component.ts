import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/model/customer';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';
import { Order } from 'src/app/shared/model/order';
import { IndexedDatabaseService } from 'src/app/shared/services/database/indexed-database.service';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  loading: boolean = false;

  allCustomers: Customer[];
  customers: Customer[];
  allOrders: Order[];

  constructor(
    private customerService: CustomerService,
    private orderService: OrderService,
    private indexedDatabaseService: IndexedDatabaseService
  ) {}

  filter(filterString: string, filterSelection: string) {
    this.customers = this.allCustomers.filter(function (elem) {
      let filterValue;

      switch (filterSelection) {
        case 'name':
          filterValue = elem.firstName + ' ' + elem.lastName;
          break;
        case 'gender':
          if (elem.gender.toUpperCase() === 'MALE') {
            return filterString.toUpperCase() === 'MALE';
          }
          if (elem.gender.toUpperCase() === 'FEMALE') {
            return filterString.toUpperCase() === 'FEMALE';
          }
          if (elem.gender.toUpperCase() === 'OTHER') {
            return filterString.toUpperCase() === 'OTHER';
          }
          break;
        case 'job':
          filterValue = elem.job;
          break;
        case 'street':
          filterValue = elem.streetAddress;
          break;
        case 'postalCode':
          filterValue = elem.postalCode ? elem.postalCode : '00000';
          break;
        case 'city':
          filterValue = elem.city;
          break;
        case 'country':
          filterValue = elem.country;
          break;
        default:
          filterValue = elem.firstName + ' ' + elem.lastName;
      }

      return filterValue.toUpperCase().includes(filterString.toUpperCase());
    });

    this.customers.sort((customer1, customer2) => (customer1.lastName > customer2.lastName ? 1 : -1));
  }

  async ngOnInit() {
    this.loading = true;

    let customers = await this.customerService.getAllCustomers();
    this.allCustomers = customers;
    this.indexedDatabaseService.addCustomersToDB(customers);

    let orders = await this.orderService.getAllOrders();
    this.allOrders = orders;
    this.indexedDatabaseService.addOrdersToDB(orders);

    for (let customer of customers) {
      let customerAsCustomer = customer as Customer;
      let ordersOfCustomer = this.allOrders.filter((x) => x.customerId == customerAsCustomer.id);
      customer.numberOfOrders = ordersOfCustomer.length;
    }

    this.customers = customers.sort((customer1, customer2) => (customer1.lastName > customer2.lastName ? 1 : -1));
    this.loading = false;
  }
}
