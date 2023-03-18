import { Component, } from '@angular/core';
import { DetailService } from '../detail.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  array:any

  constructor( public detailservice : DetailService , private cart: CartService) {

    this.array = this.detailservice.getdetail()

  }

  addtocart(cartitem:any){

this.cart.addtocart(cartitem)
this.cart.getid(this.array.length)

  }

}



