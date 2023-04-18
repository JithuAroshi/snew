import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent {

  wisharray:any;

  constructor( private cartwish: CartService ) {

this.cartwish.loadwishdata().subscribe( val => {
this.wisharray = val
console.log(this.wisharray);
})

  }

  delectwish(item:any){
    this.cartwish.delectwishData(item)
  }


}
