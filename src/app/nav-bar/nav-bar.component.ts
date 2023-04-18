import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { CategoryService } from '../service/category.service';
import { LoginAuthService } from '../service/login-auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements AfterViewInit {

Users:any
idcount:any
accswi = false
length:any;


constructor( private auth : LoginAuthService , private cartser : CartService ) {

  this.auth.loaddata().subscribe(val => {
    this.Users = val;
    // console.log(this.Users);
  })

// this.Users = localStorage.getItem('user')
// console.log(JSON.stringify(this.Users))
}

ngAfterViewInit(): void {
this.cartser.loaddata().subscribe(val => {
this.length = val.length

})



}

logOut(){
  this.auth.logout(this.Users);
  this.accswi = false;
}

accswitch(){
this.accswi = !this.accswi
}

}
