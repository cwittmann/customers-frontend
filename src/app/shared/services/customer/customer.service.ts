import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Customer} from 'src/app/shared/interfaces/customer'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<Customer[]> {
    var customers = this.http.get<Customer[]>('http://localhost:8000/api/customers');
    return customers;
  }

  getCustomer(name: string): Observable<Customer> {
    return this.http.get<Customer>('http://localhost:8000/api/customers/' + name)
  }

  insertCustomer(Customer: Customer): Observable<Customer> {
    return this.http.post<Customer>('http://localhost:8000/api/customers/', Customer)
  }

  updateCustomer(Customer: Customer): Observable<void> {
    return this.http.put<void>(
      'http://localhost:8000/api/customers/' + Customer.name,
      Customer
    )
  }

  deleteCustomer(name: string) {
    return this.http.delete('http://localhost:8000/api/customers/' + name)
  }

}
