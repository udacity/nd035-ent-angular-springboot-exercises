import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.products = [];
  }

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe(response => this.products = response);
  }

  addToCart(product: Product, amount: any): void {
    const cartProductPayload = {
      id: product.id,
      name: product.name,
      price: product.price,
      url: product.url,
      amount: parseInt(amount)
    };

    this.cartService.addToCart(cartProductPayload, amount);
  }
}
