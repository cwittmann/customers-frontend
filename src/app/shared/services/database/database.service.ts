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
  localOrdersDataLoaded: EventEmitter<Order[]>;

  constructor(
    private httpClient: HttpClient,
    private connectionService: ConnectionService,
    private indexedDatabaseService: IndexedDatabaseService
  ) {
    this.localCustomersDataLoaded = new EventEmitter();
    this.localOrdersDataLoaded = new EventEmitter();
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
