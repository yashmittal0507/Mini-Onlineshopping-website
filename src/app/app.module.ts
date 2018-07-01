import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ItemService} from './app.service'
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'checkoutPage', component: ShippingDetailsComponent },
  { path: '', redirectTo:'/home', pathMatch:'full' },
  { path: '**', component:PageNotFoundComponent  },
  
  
  // { path: '',
  //   redirectTo: '/appComponent',
  //   pathMatch: 'full'
  // },
 
];



@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    HomeComponent,
    ShippingDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,ReactiveFormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
