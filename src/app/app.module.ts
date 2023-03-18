import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrailComponent } from './main-hunter/trail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarMobileComponent } from './nav-bar-mobile/nav-bar-mobile.component';
import { BuggyJeansComponent } from './buggy-jeans/buggy-jeans.component';
import { LehengaComponent } from './lehenga/lehenga.component';
import { MehndiComponent } from './mehndi/mehndi.component';
import { SpecialComponent } from './special/special.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { environment } from './Environment/environment';

@NgModule({
  declarations: [
    AppComponent,
    TrailComponent,
    NavBarComponent,
    NavBarMobileComponent,
    BuggyJeansComponent,
    LehengaComponent,
    MehndiComponent,
    SpecialComponent,
    CartComponent,
    LoginComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
