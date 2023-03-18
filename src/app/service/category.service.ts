import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private afs : AngularFirestore ) { }

  loaddata(){
    return this.afs.collection('categories').snapshotChanges().pipe(
      map(action => {
      return action.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return{data,id}
      })
    }))
   }

}
