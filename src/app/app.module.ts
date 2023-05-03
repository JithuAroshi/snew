import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrailComponent } from './main-hunter/trail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarMobileComponent } from './nav-bar-mobile/nav-bar-mobile.component';
import { BuggyJeansComponent } from './buggy-jeans/buggy-jeans.component';
import { SpecialComponent } from './special/special.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { environment } from './Environment/environment';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TrailComponent,
    NavBarComponent,
    NavBarMobileComponent,
    BuggyJeansComponent,
    SpecialComponent,
    CartComponent,
    LoginComponent,
    DetailComponent,
    CheckoutComponent,
    AboutMeComponent,
    WishListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
