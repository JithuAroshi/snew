import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trail-1';

  detail:any

gotdetail($detail:any){
  this.detail = $detail
}
}
