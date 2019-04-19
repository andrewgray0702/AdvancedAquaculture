import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-stock',
  templateUrl: './live-stock.component.html',
  styleUrls: ['./live-stock.component.scss']
})
export class LiveStockComponent implements OnInit {
  constructor() { }
  products: Object[] = [
    {name: "Ultra Rasta Zoa", img: "ultraRasta.jpg", price: "10$ per polyp", type: "coral"},
    {name: "Picasso Percula Clownfish", img: "picasso.jpg", price: "100$ per pair", type: "fish"},
    {name: "Halloween Leptoseris", img: "jackolantern.jpg", price: '50$ for 1/2', type: "coral"},
    {name: 'Rainbow Acan', img: 'rainbowAcan.jpg', price: '30$ per head, type: "coral"'},
    {name: 'Lined Seahorse', img: 'linedSeahorse.jpg', price:'250$ a pair', type: "fish"},
    {name: '3g Mummy Eye Chalice', img: 'mummyEye.jpg', price: '50$ per eye', type: "coral"},
    {name: 'Blonde Haired Blue Eye Bitch Zoa', img: 'BHBEB.jpg', price: '15$ per polyp', type: "coral"},
    {name: 'Pink Boobie Chalice', img: 'pinkBoobie.jpg', price: '35$ an eye', type: "coral"},
    {name: 'Fuzzy Nut', img: 'fuzzyNut.jpg', price: '45$ each', type: "fish"}
  ]
  ngOnInit() {
  }


}
