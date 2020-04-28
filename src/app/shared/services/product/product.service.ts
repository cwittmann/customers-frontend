import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  async getAllProducts(): Promise<Product[]> {
    return this.http.get<Product[]>('http://localhost:8000/api/products').toPromise();
  }

  async getProduct(id: string): Promise<Product[]> {
    return this.http.get<Product[]>('http://localhost:8000/api/products/' + id).toPromise();
  }
}
