import { Injectable } from '@angular/core';
import { Customer } from 'src/app/shared/model/customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  async getAllCustomers(): Promise<Customer[]> {
    return await this.http.get<Customer[]>('http://localhost:8000/api/customers').toPromise();
  }

  async getCustomer(id: string): Promise<Customer[]> {
    return await this.http.get<Customer[]>('http://localhost:8000/api/customers/' + id).toPromise();
  }

  async insertCustomer(Customer: Customer) {
    return await this.http.post('http://localhost:8000/api/customers/', Customer).toPromise();
  }

  async updateCustomer(Customer: Customer) {
    return await this.http.put('http://localhost:8000/api/customers/' + Customer.id, Customer).toPromise();
  }

  async deleteCustomer(id: string) {
    return await this.http.delete('http://localhost:8000/api/customers/' + id).toPromise();
  }
}
