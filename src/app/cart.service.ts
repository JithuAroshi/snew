import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  id: any;
  bagNo = 0;
  length:any

  constructor(private afs: AngularFirestore) {}


  addtocart(product: any) {
    this.afs
      .collection('carts')
      .add(product)
      .then((docRef) => {
        // console.log('success');
      });
  }

  addtowishlist(product: any) {
    this.afs
      .collection('wishlist')
      .add(product)
      .then((docRef) => {
        // console.log('success');
      });
  }

  loaddata() {
    return this.afs
      .collection('carts')
      .snapshotChanges()
      .pipe(
        map((action) => {
          return action.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            const length = a.payload.doc.data.length
            return { data, id , length };
          });
        })
      );
  }

  loadwishdata() {
    return this.afs
      .collection('wishlist')
      .snapshotChanges()
      .pipe(
        map((action) => {
          return action.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { data, id };
          });
        })
      );
  }

  delectData(id: any) {
    this.afs
      .doc(`carts/${id}`)
      .delete()
      .then(() => {
        // console.log(id);
      });
  }

  delectwishData(id: any) {
    this.afs
      .doc(`wishlist/${id}`)
      .delete()
      .then(() => {
        // console.log(id);
      });
  }

  setbagNO(num:any){
  this.bagNo = num
  console.log(this.bagNo);

}

getBagNo(){
  // console.log(this.bagNo);
  console.log(this.bagNo);
  this.bagNo

  }

}
