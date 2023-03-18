import { Component , AfterViewInit } from '@angular/core';
import { DetailService } from '../detail.service';
import { ApiserviceService } from '../apiservice.service';
import { CartService } from '../cart.service';
import { DeclareFunctionStmt } from '@angular/compiler';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  public array:any = []
  grandtotal:any = 0
  totaldiscount:any = 0

  constructor( public detail:DetailService , public cart : CartService ) {

  this.cart.getproduct()
  .subscribe(res => {
    this.array = res;
    this.grandtotal = this.cart.gettotalprice();
    this.totaldiscount = this.cart.gettotaldiscount();


console.log(this.array);
})

}


delectitem(item:any){
this.cart.removeitem(item)
}



Onshow = false

show(){
this.Onshow = !this.Onshow
}




}
