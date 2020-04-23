import { Injectable } from '@angular/core';
import { Customer } from '../../model/customer';
import { Order } from '../../model/order';

@Injectable({
  providedIn: 'root',
})
export class IndexedDatabaseService {
  constructor() {}

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

  addCustomersToDB(customers: Customer[]) {
    let indexedDB = window.indexedDB;
    let open = indexedDB.open('customersDB', 2);

    open.onsuccess = function () {
      let db = open.result;
      let transaction = db.transaction(['customer'], 'readwrite');
      let store = transaction.objectStore('customer');

      for (let customer of customers) {
        store.add(customer);
      }

      transaction.oncomplete = function () {
        console.log('All customers stored in IndexedDB.');
      };
      transaction.onerror = function (event: any) {
        alert('error storing customer ' + event.target.errorCode);
      };
    };
  }

  addOrdersToDB(orders: Order[]) {
    let indexedDB = window.indexedDB;
    let open = indexedDB.open('customersDB', 2);

    open.onsuccess = function () {
      let db = open.result;
      let transaction = db.transaction(['order'], 'readwrite');
      let store = transaction.objectStore('order');

      for (let order of orders) {
        store.add(order);
      }

      transaction.oncomplete = function () {
        console.log('All customers stored in IndexedDB.');
      };
      transaction.onerror = function (event: any) {
        alert('error storing customer ' + event.target.errorCode);
      };
    };
  }
}
