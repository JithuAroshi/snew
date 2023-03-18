import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

 switch:any = true

  accountswitch(){
    this.switch = !this.switch
  }


}
