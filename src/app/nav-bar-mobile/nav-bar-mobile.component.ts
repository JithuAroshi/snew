import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav-bar-mobile',
  templateUrl: './nav-bar-mobile.component.html',
  styleUrls: ['./nav-bar-mobile.component.scss']
})
export class NavBarMobileComponent {

  idcount:any

  constructor( private cart : CartService ) {

  this.cart.getproduct()
  .subscribe(res => {
    this.idcount = res.length;
    // console.log(this.idcount);
  })
  }

}
