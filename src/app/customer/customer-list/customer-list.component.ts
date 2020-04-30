import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/model/customer';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';
import { Order } from 'src/app/shared/model/order';
import { IndexedDatabaseService } from 'src/app/shared/services/database/indexed-database.service';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { ConnectionService } from 'src/app/shared/services/connection/connection.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  loading: boolean = false;
  isLocalDataLoaded: boolean = false;

  allCustomers: Customer[];
  customers: Customer[];
  allOrders: Order[];

  constructor(
    private customerService: CustomerService,
    private orderService: OrderService,
    private indexedDatabaseService: IndexedDatabaseService,
    private connectionService: ConnectionService
  ) {
    indexedDatabaseService.localCustomerDataLoaded.subscribe((localCustomerData) => {
      if (this.isLocalDataLoaded) {
        return;
      }

      this.allCustomers = localCustomerData;

      if (this.allCustomers?.length > 0 && this.allOrders?.length > 0) {
        this.isLocalDataLoaded = true;
        this.displayCustomers();
      }
    });
    indexedDatabaseService.localOrderDataLoaded.subscribe((localOrderData) => {
      if (this.isLocalDataLoaded) {
        return;
      }

      this.allOrders = localOrderData;

      if (this.allCustomers?.length > 0 && this.allOrders?.length > 0) {
        this.isLocalDataLoaded = true;
        this.displayCustomers();
      }
    });
  }

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

  displayCustomers() {
    for (let customer of this.allCustomers) {
      let customerAsCustomer = customer as Customer;
      let ordersOfCustomer = this.allOrders.filter((x) => x.customerId == customerAsCustomer.id);
      customer.numberOfOrders = ordersOfCustomer.length;
    }

    this.customers = this.allCustomers.sort((customer1, customer2) =>
      customer1.lastName > customer2.lastName ? 1 : -1
    );
    this.loading = false;
  }

  async ngOnInit() {
    this.loading = true;

    let connectionToServer = await this.connectionService.checkConnection();

    if (connectionToServer) {
      this.customers = await this.customerService.getAllCustomers();
      this.allCustomers = this.customers;
      this.indexedDatabaseService.addCustomersToDatabase(this.customers);

      let orders = await this.orderService.getAllOrders();
      this.allOrders = orders;
      this.indexedDatabaseService.addOrdersToDatabase(orders);

      this.displayCustomers();
    } else {
      this.indexedDatabaseService.getCustomersFromDatabase();
      this.indexedDatabaseService.getOrdersFromDatabase();
    }
  }
}
