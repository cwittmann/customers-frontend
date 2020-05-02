import { Injectable } from '@angular/core';
import { Customer } from 'src/app/shared/model/customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  async getAllCustomers(): Promise<Customer[]> {
    return await this.http.get<Customer[]>('https://customers-backend.herokuapp.com/api/customers').toPromise();
  }

  async getCustomer(id: string): Promise<Customer[]> {
    return await this.http.get<Customer[]>('https://customers-backend.herokuapp.com/api/customers/' + id).toPromise();
  }

  async insertCustomer(Customer: Customer) {
    return await this.http.post('https://customers-backend.herokuapp.com/api/customers/', Customer).toPromise();
  }

  async updateCustomer(Customer: Customer) {
    return await this.http
      .put('https://customers-backend.herokuapp.com/api/customers/' + Customer.id, Customer)
      .toPromise();
  }

  async deleteCustomer(id: string) {
    return await this.http.delete('https://customers-backend.herokuapp.com/api/customers/' + id).toPromise();
  }
}
