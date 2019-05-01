import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LiveStockComponent } from '../live-stock/live-stock.component';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartViews: Object[] = [];
  cartPrice: number = 0;
  shipping: number = 45;
  subtotal: number = 0;
  constructor(private cartServ: CartService) { }
  calculateCart(){
    this.subtotal = this.cartServ.getPrice();
    this.cartPrice = Math.floor(this.cartServ.getPrice() + this.shipping);
  }
  deleteCartItem(id){
    this.cartServ.deleteFromCart(id);
  }
  ngOnInit() {
    this.cartViews = JSON.parse(localStorage.getItem('cart'));
  }

}
