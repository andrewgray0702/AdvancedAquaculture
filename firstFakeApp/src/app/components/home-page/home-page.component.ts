import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  images = ['assets/carousel1.jpg', 'assets/carousel2.jpg', 'assets/carousel3.jpg', 'assets/carousel4.jpg', 'assets/carousel5.jpg']
  ngOnInit() {
  }

}
