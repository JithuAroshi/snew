import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { LoginAuthService } from '../service/login-auth.service';

@Component({
  selector: 'app-nav-bar-mobile',
  templateUrl: './nav-bar-mobile.component.html',
  styleUrls: ['./nav-bar-mobile.component.scss']
})
export class NavBarMobileComponent {

  bagitemcount:any
  user:any

  constructor( private auth : LoginAuthService , private cart : CartService ) {

  }

  ngAfterViewInit(): void {
    this.cart.loaddata().subscribe(val => {
    this.bagitemcount = val.length
    })

}
}
