import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

idcount:any

constructor( private cart : CartService ) {

this.cart.getproduct()
.subscribe(res => {
  this.idcount = res.length;
  console.log(this.idcount);
})
}


}
