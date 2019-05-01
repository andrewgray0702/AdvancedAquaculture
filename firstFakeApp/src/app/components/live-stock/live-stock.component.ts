import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-live-stock',
  templateUrl: './live-stock.component.html',
  styleUrls: ['./live-stock.component.scss']
})
export class LiveStockComponent implements OnInit {
  constructor(private cartServ: CartService) { }
  totalPrice: number = 0;
  products: Object[] = [
    {name: "Ultra Rasta Zoa", img: "ultraRasta.jpg", price: "10$ per polyp", type: "coral", cartPrice: "10"},
    {name: "Picasso Percula Clownfish", img: "picasso.jpg", price: "100$ per pair", type: "fish", cartPrice: "100"},
    {name: "Halloween Leptoseris", img: "jackolantern.jpg", price: '50$ for 1/2', type: "coral", cartPrice: "50"},
    {name: 'Rainbow Acan', img: 'rainbowAcan.jpg', price: '30$ per head, type: "coral"', cartPrice: "30"},
    {name: 'Lined Seahorse', img: 'linedSeahorse.jpg', price:'250$ a pair', type: "fish", cartPrice: "250"},
    {name: '3g Mummy Eye Chalice', img: 'mummyEye.jpg', price: '50$ per eye', type: "coral", cartPrice: "50"},
    {name: 'Blonde Haired Blue Eye Bitch Zoa', img: 'BHBEB.jpg', price: '15$ per polyp', type: "coral", cartPrice: "15"},
    {name: 'Pink Boobie Chalice', img: 'pinkBoobie.jpg', price: '35$ an eye', type: "coral", cartPrice: "35"},
    {name: 'Fuzzy Nut', img: 'fuzzyNut.jpg', price: '45$ each', type: "fish", cartPrice: "45"}
  ]
  addProduct(toAdd){
    this.totalPrice = Math.floor(this.totalPrice + parseInt(toAdd['cartPrice']));
    this.cartServ.addToCart(toAdd);
  }
  ngOnInit() {
  }


}
