import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../../model/order';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient, private productService: ProductService) {}

  async getAllOrders(): Promise<Order[]> {
    return await this.http.get<Order[]>('http://localhost:8000/api/orders').toPromise();
  }

  async getAllOrdersOfCustomer(customerid: string) {
    let ordersOfCustomer = await this.http
      .get<Order[]>('http://localhost:8000/api/ordersOfCustomer/' + customerid)
      .toPromise();

    for (let order of ordersOfCustomer) {
      let products = await this.productService.getProduct(order.productid.toString());
      let product = products[0];

      order.name = product.name;
      order.manufacturer = product.manufacturer;
      order.price = product.price;
    }

    return ordersOfCustomer;
  }

  async getOrder(id: string): Promise<Order[]> {
    return await this.http.get<Order[]>('http://localhost:8000/api/orders/' + id).toPromise();
  }

  async insertOrder(order: Order) {
    return await this.http.post('http://localhost:8000/api/orders/', order).toPromise();
  }

  async updateOrder(order: Order) {
    return this.http.put('http://localhost:8000/api/orders/' + order.id, order).toPromise();
  }

  async deleteOrder(id: string) {
    return this.http.delete('http://localhost:8000/api/orders/' + id).toPromise();
  }
}
