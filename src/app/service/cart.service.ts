import { Injectable } from '@angular/core';
import { Product, } from 'src/data-type';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = [];

  addToCart(product: Product): void {
    this.cartItems.push(product);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  clearCart(): void {
    this.cartItems = [];
  }


}
