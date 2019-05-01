import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveStockComponent } from './components/live-stock/live-stock.component';
import { CartComponent } from './components/cart/cart.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path: 'livestock', component: LiveStockComponent},
  {path: 'cart', component: CartComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'aboutus', component: AboutUsComponent}, 
  {path: 'contact', component: ContactUsComponent},
  {path: '**', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
