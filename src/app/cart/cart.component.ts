import { Component, AfterViewInit, OnInit } from '@angular/core';
import { DetailService } from '../detail.service';
import { ApiserviceService } from '../apiservice.service';
import { CartService } from '../cart.service';
import { DeclareFunctionStmt } from '@angular/compiler';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  array: any = [];
  grandtotal: any = 0;
  totaldiscount: any = 0;
  num: any;

  constructor(public detail: DetailService, public cart: CartService) {


    this.cart.loaddata().subscribe((data) => {
      this.array = data;
      this.grandtotal = this.gettotalprice();
      this.totaldiscount = this.gettotaldiscount();
      this.num = this.array.length
      // console.log(this.num);
      this.cart.setbagNO(this.num)
    });


  }

  ngOnInit(): void {

  }



  gettotalprice() {
    let grandtotal = 0;
    this.array.map((a: any) => {
      grandtotal += a.data.data.discountrate;
    });
    return grandtotal;
  }

  gettotaldiscount() {
    let totaldiscount = 0;
    this.array.map((a: any) => {
      totaldiscount += a.data.data.orginalrate - a.data.data.discountrate;
    });
    return totaldiscount;
  }

  delectitem(item: any,) {
    this.cart.delectData(item);
  }



  Onshow = false;

  show() {
    this.Onshow = !this.Onshow;
  }
}
