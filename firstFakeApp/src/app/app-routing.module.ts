import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveStockComponent } from './components/live-stock/live-stock.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path: 'livestock', component: LiveStockComponent},
  {path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
