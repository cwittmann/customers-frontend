import { Injectable } from '@angular/core';
import { Customer } from 'src/app/shared/model/customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getAllCustomers() {
    return this.http.get('http://localhost:8000/api/customers');
  }

  getCustomer(id: string) {
    return this.http.get('http://localhost:8000/api/customers/' + id);
  }

  insertCustomer(Customer: Customer) {
    return this.http.post('http://localhost:8000/api/customers/', Customer);
  }

  updateCustomer(Customer: Customer) {
    return this.http.put('http://localhost:8000/api/customers/' + Customer.id, Customer);
  }

  deleteCustomer(id: string) {
    return this.http.delete('http://localhost:8000/api/customers/' + id);
  }
}
