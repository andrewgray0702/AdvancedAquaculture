import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveStockComponent } from './components/live-stock/live-stock.component';

const routes: Routes = [
  {path: 'livestock', component: LiveStockComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
