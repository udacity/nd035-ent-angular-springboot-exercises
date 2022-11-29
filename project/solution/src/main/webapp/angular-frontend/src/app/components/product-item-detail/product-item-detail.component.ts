import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/Product';


@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: Product | undefined;
  selectedAmount: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.productService
      .getProducts()
      .subscribe(response => {
        let id = this.getPageId();
        this.product = response.find(product => product.id === parseInt(id))
      });
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

  // util
  getPageId(): any {
    return this.route.snapshot.paramMap.get('id');
  }
}
