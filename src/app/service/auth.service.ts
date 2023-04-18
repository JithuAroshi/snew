import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Toast, ToastrModule, ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LoginAuthService } from './login-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private authser : LoginAuthService , private router : Router , private toastr : ToastrService ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if(this.authser.isLoggedInGuard) {
      return true;
    }else{
      this.router.navigate(['/login']);
      this.toastr.warning('You dont have the permission to access this page..!');
      return false;
    }

  }
}
