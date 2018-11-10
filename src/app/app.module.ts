import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ItemService} from './app.service'
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { AuthGuardService as AuthGuard } from './auth-guard.service'
import {LoaderComponent} from './loader/loader.component'



const appRoutes: Routes = [
  
  { path: 'home', component: HomeComponent,
    canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },  
  { path: 'shopping-cart', component: ShoppingCartComponent,canActivate: [AuthGuard] },
  { path: 'checkoutPage', component: ShippingDetailsComponent,canActivate: [AuthGuard] },
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
    PageNotFoundComponent,
    LoginComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [ItemService,LoginService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
