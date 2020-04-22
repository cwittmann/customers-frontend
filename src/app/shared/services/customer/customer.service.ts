import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Customer} from 'src/app/shared/model/customer'
import { Order} from 'src/app/shared/model/order'
import { HttpClient } from '@angular/common/http'
import { Product } from '../../model/product'

@Injectable({
  providedIn: 'root'
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
    return this.http.delete('http://localhost:8000/api/customers/' + id)
  }

  getAllProducts() {
    var products = this.http.get('http://localhost:8000/api/products');
    return products;
  }

  getAllOrders() {
    return this.http.get('http://localhost:8000/api/orders');    
  }

  async getAllOrdersOfCustomer(customerId: string) {
    let ordersOfCustomer = await this.http.get<Order[]>('http://localhost:8000/api/orders/' + customerId).toPromise();    

    for (let order of ordersOfCustomer){
      let products = await this.http.get<Product[]>('http://localhost:8000/api/product/' + order.productId).toPromise();      
      let product = products[0];

      order.name = product.name;
      order.manufacturer = product.manufacturer;
      order.price = product.price;
    }     

    return ordersOfCustomer;
  }

  getOrder(id: string) {
    return this.http.get('http://localhost:8000/api/orders/' + id);    
  }

  getProduct(id: string) {
    return this.http.get('http://localhost:8000/api/product/' + id);    
  }
}  
