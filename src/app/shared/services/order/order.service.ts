import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../../model/order';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient, private productService: ProductService) {}

  getAllOrders() {
    return this.http.get('http://localhost:8000/api/orders');
  }

  async getAllOrdersOfCustomer(customerId: string) {
    let ordersOfCustomer = await this.http
      .get<Order[]>('http://localhost:8000/api/ordersOfCustomer/' + customerId)
      .toPromise();

    for (let order of ordersOfCustomer) {
      let products = await this.productService.getProduct(order.productId.toString()).toPromise();
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

  deleteOrder(id: string) {
    return this.http.delete('http://localhost:8000/api/orders/' + id);
  }
}
