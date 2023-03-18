import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  id:any;
  public cartitem:any = []
  public productlist = new BehaviorSubject<any>([])

  constructor() { }

getproduct(){
  return this.productlist.asObservable()
}

setproduct(product:any){
  this.cartitem.push(...product)
this.productlist.next(product)
}

addtocart(product:any){
this.cartitem.push(product)
this.productlist.next(this.cartitem)
this.gettotalprice();
this.gettotaldiscount();
}

gettotalprice(){
let grandtotal = 0;
this.cartitem.map((a:any)=>{
  grandtotal += a.data.discountrate
})
return grandtotal
}

gettotaldiscount(){
  let totaldiscount = 0;
  this.cartitem.map((a:any)=>{
    totaldiscount += a.data.orginalrate - a.data.discountrate
  })
  return totaldiscount
}

removeitem(product:any){
this.cartitem.map((a:any , index:any)=>{
  if(product.id === a.id){
    this.cartitem.splice(index,1)
    this.productlist.next(this.cartitem)
  }
})
}

removeallitem(){
  this.cartitem = [];
  this.productlist.next(this.cartitem)
}

getid(count:any){
this.id = count
}

setid(){
  return this.id
}

}
