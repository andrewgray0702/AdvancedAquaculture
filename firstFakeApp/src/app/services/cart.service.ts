import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Object[] = [];
  totalPrice: number = 0;
  nextID: number = 0;
  constructor() { }
  addToCart(product){
    product['ID'] = this.nextID;
    this.nextID++;
    this.totalPrice = Math.floor(this.totalPrice + parseInt(product['cartPrice']));
    this.cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cartItems))
    console.log(this.cartItems);
  }
  getPrice(){
    return this.totalPrice;
  }
  deleteFromCart(id){
    this.cartItems.slice(id, 1)
    console.log(this.cartItems);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
}
