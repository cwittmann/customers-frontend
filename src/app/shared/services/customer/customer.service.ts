import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Customer} from 'src/app/shared/model/customer'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {}

  getAllCustomers() {
    var customers = this.http.get('http://localhost:8000/api/customers');
    return customers;
  }

  getCustomer(name: string) {
    return this.http.get('http://localhost:8000/api/customers/' + name);
  }

  insertCustomer(Customer: Customer) {
    return this.http.post('http://localhost:8000/api/customers/', Customer);
  }

  updateCustomer(Customer: Customer) {
    return this.http.put(
      'http://localhost:8000/api/customers/' + Customer.name,
      Customer
    );
  }

  deleteCustomer(name: string) {
    return this.http.delete('http://localhost:8000/api/customers/' + name)
  }
}
