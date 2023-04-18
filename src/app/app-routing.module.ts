import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { BuggyJeansComponent } from './buggy-jeans/buggy-jeans.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetailComponent } from './detail/detail.component';
import { LehengaComponent } from './lehenga/lehenga.component';
import { LoginComponent } from './login/login.component';
import { TrailComponent } from './main-hunter/trail.component';
import { MehndiComponent } from './mehndi/mehndi.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SpecialComponent } from './special/special.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { AuthService } from './service/auth.service'

const routes: Routes = [
  { path: '',redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: TrailComponent , canActivate: [AuthService] },
  { path: 'buggy-jeans/:id', component: BuggyJeansComponent, canActivate: [AuthService]},
  { path: 'lehenga', component: LehengaComponent , canActivate: [AuthService]},
  { path: 'mehndi', component: MehndiComponent , canActivate: [AuthService]},
  { path: 'special', component: SpecialComponent , canActivate: [AuthService]},
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent , canActivate: [AuthService]},
  { path: 'detail', component: DetailComponent , canActivate: [AuthService]},
  { path: 'checkout', component: CheckoutComponent , canActivate: [AuthService]},
  { path: 'wishlist', component: WishListComponent , canActivate: [AuthService]},
  { path: 'aboutme', component: AboutMeComponent , canActivate: [AuthService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
