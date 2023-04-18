import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  UserName:any;
  logged:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedInGuard: boolean = false;
  changinguserid:any;
  specialid:any;

  constructor( private router : Router , private auth : AngularFireAuth , private afs : AngularFirestore , private toastr : ToastrService ) {
    if(localStorage.getItem('user')){
      this.isLoggedInGuard = true
      this.logged.next(true)
     }
   }


  login(userid:any,userpass:any){
    this.changinguserid = userid;
    return this.auth.signInWithEmailAndPassword( userid , userpass).then(docRef => {
      this.loaduser();
      this.isLoggedInGuard = true
      this.logged.next(true)
      this.toastr.success('Login in Successfully...!')
      this.router.navigate(['/home'])

    })
  }

  loaduser(){
    this.auth.authState.subscribe( user => {
     localStorage.setItem('user' , JSON.stringify(user));
// console.log(localStorage);
    } )
   }

  signup( email:any , password:any ){
    this.auth.createUserWithEmailAndPassword(email , password).then(docRef => {
      this.specialid = docRef.user?.uid
      this.toastr.success('Signed in Successfully...!')
    })
  }

  logout(id:any){
    this.auth.signOut().then(()=>{
      this.toastr.success('Logged Out Successfully');
      this.logged.next(false);
      this.isLoggedInGuard = false;
      this.removedata(id.id)
      localStorage.removeItem('user')
      this.router.navigate(['/login'])
    })
  }

adddata(user:any){
  this.afs.collection('users').add(user).then(docRef => {

  })
}

removedata(id:any){
  this.afs.collection('users').doc(id).delete().then(docRef => {

  })
}

  loaddata(){
    return this.afs.collection('users').snapshotChanges().pipe(
      map(action => {
      return action.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return{data,id}
      })
    }))
  }


}


