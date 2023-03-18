import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuggyJeansComponent } from './buggy-jeans/buggy-jeans.component';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './detail/detail.component';
import { LehengaComponent } from './lehenga/lehenga.component';
import { LoginComponent } from './login/login.component';
import { TrailComponent } from './main-hunter/trail.component';
import { MehndiComponent } from './mehndi/mehndi.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SpecialComponent } from './special/special.component';

const routes: Routes = [
  { path: '',redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: TrailComponent},
  { path: 'buggy-jeans/:id', component: BuggyJeansComponent},
  { path: 'lehenga', component: LehengaComponent },
  { path: 'mehndi', component: MehndiComponent },
  { path: 'special', component: SpecialComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'detail', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
