import { Injectable } from '@angular/core';
import { of } from 'rxjs';

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
  deleteFromCart(id){
    console.log(id)
    this.cartItems.splice(id, 1)
    console.log(this.cartItems);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
  get items(){
    return of(this.cartItems)
  }
}
