import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: any[] = [];

  constructor(private http: HttpClient) { }

  getCartProducts() {
    return this.cartProducts;
  }

  addToCart(product: any, amount: any) {
    const existingProduct = this.cartProducts.find((cartProduct: any) => cartProduct.id === product.id);

    if (existingProduct === undefined) {
      this.cartProducts.push(product);
      alert('Added to cart!');
      return;
    }

    existingProduct.amount += parseInt(amount);

    alert('Added to cart!');
  }

  clearCart() {
    this.cartProducts = [];
    return this.cartProducts;
  }

  updateCart(cart: any) {
    this.cartProducts = cart;

    return this.cartProducts;
  }

  submitOrder(order: any): Observable<any> {
      const myProducts=JSON.stringify(this.cartProducts);
      const req = this.http.post<any>('http://localhost:8080/orders/submit',  {name : order.name, price : order.price, products : myProducts}, { headers: { Authorization: 'Basic dWRhY2l0eTpwYXNzd29yZA=='}});
      req.subscribe();
      return req;
  }
}
