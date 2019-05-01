import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LiveStockComponent } from './components/live-stock/live-stock.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchbyPipe } from './pipes/searchby.pipe';
import { CartComponent } from './components/cart/cart.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    LiveStockComponent,
    AboutUsComponent,
    FilterPipe,
    SearchbyPipe,
    CartComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule, NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
