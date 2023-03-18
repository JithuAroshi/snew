import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

// detailitems:any

  constructor() { }

  public detailpass:any
  public cartpass:any

  setdetail(detaildata:any){
this.detailpass = detaildata
  }

  getdetail(){
    return this.detailpass
  }


  setcart(cartdata:any){
    this.cartpass = cartdata
      }

      getcart(){
        return this.cartpass
      }


  ngOnInit(): void {

    // console.log(this.detailitems);


  }

}
