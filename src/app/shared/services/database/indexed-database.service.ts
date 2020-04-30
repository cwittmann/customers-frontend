import { Injectable, EventEmitter } from '@angular/core';
import { Customer } from '../../model/customer';
import { Order } from '../../model/order';

@Injectable({
  providedIn: 'root',
})
export class IndexedDatabaseService {
  localCustomerDataLoaded: EventEmitter<Customer[]>;
  localOrderDataLoaded: EventEmitter<Order[]>;
  self1 = this;

  constructor() {
    this.localCustomerDataLoaded = new EventEmitter();
    this.localOrderDataLoaded = new EventEmitter();
  }

  ngOnInit() {
    let db;
    let dbReq = indexedDB.open('customersDB', 2);

    dbReq.onupgradeneeded = function (event: any) {
      db = event.target.result;
      db.createObjectStore('customer', { autoIncrement: true });
      db.createObjectStore('order', { autoIncrement: true });
    };

    dbReq.onsuccess = function (event: any) {
      db = event.target.result;
    };

    dbReq.onerror = function (event: any) {
      alert('error opening database ' + event.target.errorCode);
    };
  }

  storeItemsInDatabase(type: string, items: any[]) {
    let indexedDB = window.indexedDB;
    let open = indexedDB.open('customersDB', 2);

    open.onsuccess = function () {
      let db = open.result;
      let transaction = db.transaction([type], 'readwrite');
      let store = transaction.objectStore(type);
      store.clear();

      for (let item of items) {
        store.add(item);
      }

      transaction.oncomplete = function () {
        console.log('All ' + type + 's stored in IndexedDB.');
      };
      transaction.onerror = function (event: any) {
        alert('Error storing ' + type + ' ' + event.target.errorCode);
      };
    };
  }

  async getItemsFromDatabase(type: string) {
    let indexedDB = window.indexedDB;
    let open = indexedDB.open('customersDB', 2);

    let result;

    open.onsuccess = async function () {
      let db = open.result;
      let transaction = db.transaction([type], 'readwrite');
      let store = transaction.objectStore(type);
      let items = await store.getAll();

      let customerEmitter = this.localCustomerDataLoaded;
      let orderEmitter = this.localOrderDataLoaded;

      transaction.oncomplete = function () {
        if (type === 'customer') {
          customerEmitter.emit(items.result);
        }
        if (type === 'order') {
          orderEmitter.emit(items.result);
        }
      };
      transaction.onerror = function (event: any) {
        alert('error storing customer ' + event.target.errorCode);
      };
    }.bind(this);
  }

  getItems() {}

  addCustomersToDatabase(customers: Customer[]) {
    this.storeItemsInDatabase('customer', customers);
  }

  getCustomersFromDatabase() {
    return this.getItemsFromDatabase('customer');
  }

  addOrdersToDatabase(orders: Order[]) {
    this.storeItemsInDatabase('order', orders);
  }

  getOrdersFromDatabase() {
    return this.getItemsFromDatabase('order');
  }
}
