import { Injectable, EventEmitter } from '@angular/core';
import { Customer } from '../../model/customer';
import { Order } from '../../model/order';
import { HttpClient } from '@angular/common/http';
import { IndexedDatabaseService } from './indexed-database.service';
import { ConnectionService } from '../connection/connection.service';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  localCustomersDataLoaded: EventEmitter<Customer[]>;
  localCustomerDataLoaded: EventEmitter<Customer>;
  localOrdersDataLoaded: EventEmitter<Order[]>;
  localOrderDataLoaded: EventEmitter<Order>;

  constructor(
    private httpClient: HttpClient,
    private connectionService: ConnectionService,
    private indexedDatabaseService: IndexedDatabaseService
  ) {
    this.localCustomersDataLoaded = new EventEmitter();
    this.localCustomerDataLoaded = new EventEmitter();
    this.localOrdersDataLoaded = new EventEmitter();
    this.localOrderDataLoaded = new EventEmitter();

    this.indexedDatabaseService.localCustomersDataLoaded.subscribe((localCustomersData) => {
      this.localCustomersDataLoaded.emit(localCustomersData);
    });

    this.indexedDatabaseService.localCustomerDataLoaded.subscribe((localCustomerData) => {
      this.localCustomerDataLoaded.emit(localCustomerData);
    });

    this.indexedDatabaseService.localOrdersDataLoaded.subscribe((localOrdersData) => {
      this.localOrdersDataLoaded.emit(localOrdersData);
    });

    this.indexedDatabaseService.localOrderDataLoaded.subscribe((localOrderData) => {
      this.localOrderDataLoaded.emit(localOrderData);
    });
  }

  async requestCustomerFromDatabase(id) {
    let connectionToServer = await this.connectionService.checkConnection();

    if (!connectionToServer) {
      this.indexedDatabaseService.requestCustomerFromDatabase(id);
      return;
    }
    this.httpClient.get<Customer[]>('http://localhost:8000/api/customers/' + id).subscribe((res) => {
      let customers = res as Customer[];
      let customer = customers[0];
      this.localCustomerDataLoaded.emit(customer);
    });
  }

  async requestCustomersFromDatabase() {
    let connectionToServer = await this.connectionService.checkConnection();

    if (!connectionToServer) {
      this.indexedDatabaseService.requestCustomersFromDatabase();
      return;
    }

    this.httpClient.get<Customer[]>('http://localhost:8000/api/customers').subscribe((res) => {
      let customers = res as Customer[];
      this.indexedDatabaseService.addCustomersToDatabase(customers);
      this.localCustomersDataLoaded.emit(customers);
    });
  }

  async requestOrderFromDatabase(id) {
    let connectionToServer = await this.connectionService.checkConnection();

    if (!connectionToServer) {
      this.indexedDatabaseService.requestOrderFromDatabase(id);
      return;
    }
    this.httpClient.get<Order[]>('http://localhost:8000/api/orders/' + id).subscribe((res) => {
      let orders = res as Order[];
      let order = orders[0];
      this.localOrderDataLoaded.emit(order);
    });
  }

  async requestOrdersFromDatabase() {
    let connectionToServer = await this.connectionService.checkConnection();

    if (!connectionToServer) {
      this.indexedDatabaseService.requestOrdersFromDatabase();
      return;
    }

    this.httpClient.get<Order[]>('http://localhost:8000/api/orders').subscribe((res) => {
      let orders = res as Order[];
      this.indexedDatabaseService.addOrdersToDatabase(orders);
      this.localOrdersDataLoaded.emit(orders);
    });
  }
}
