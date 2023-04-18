import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AbstractControl, FormControl, FormControlName, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { LoginAuthService } from '../service/login-auth.service';

export function passwordsMatchValidator(): ValidatorFn {
  return (control:AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmpassword = control.get('confirmpassword')?.value;

    if(password && confirmpassword && password !== confirmpassword) {
      return {
        passwordsDontMatch:true
      }
    }
return null;

  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  Users:any = [];

  constructor( private afs : AngularFirestore , private router : Router , private auth : LoginAuthService , private tostr : ToastrService ) {}

 switch:any = true

  accountswitch(){
    this.switch = !this.switch
  }

  Onsubmit(userid:any,userpass:any){

    this.auth.login(userid,userpass)
    

  }

  signUpForm = new FormGroup({
    firstname: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    phonenumber: new FormControl('',[Validators.required , Validators.minLength(10)] ),
    email: new FormControl('',[Validators.required , Validators.email] ),
    password: new FormControl('',Validators.required),
    confirmpassword: new FormControl('',Validators.required),
  }, { validators: passwordsMatchValidator() } )


  get firstname() {
    return this.signUpForm.get('firstname')
  }

  get lastname() {
    return this.signUpForm.get('lastname')
  }

  get phonenumber() {
    return this.signUpForm.get('phonenumber')
  }

  get email() {
    return this.signUpForm.get('email')
  }

  get password() {
    return this.signUpForm.get('password')
  }

  get confirmpassword() {
    return this.signUpForm.get('confirmpassword')
  }

  signsubmit(){

    const { firstname,email,password,phonenumber } = this.signUpForm.value
    this.auth.signup(email,password)
   this.tostr.success('Congrats..! You Signed Up')
    this.Users = {firstname,email,phonenumber}
   this.auth.adddata(this.Users)
    this.switch = true

  }

}
