import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Object[] = [];
  totalPrice: number = 0;
  constructor() { }
  addToCart(product){
    this.totalPrice = Math.floor(this.totalPrice + parseInt(product['cartPrice']));
    this.cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cartItems))
    console.log(this.cartItems);
  }
  getPrice(){
    return this.totalPrice;
  }
}
