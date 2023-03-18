import { AfterViewInit, Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-mehndi',
  templateUrl: './mehndi.component.html',
  styleUrls: ['./mehndi.component.scss']
})
export class MehndiComponent implements AfterViewInit {

  array:any = []

  constructor(private datas:ApiserviceService , private detail:DetailService) {}

  ngAfterViewInit(): void {
    this.datas.apidata.subscribe((data) => {
      this.array = data.products
      console.log(this.array);

    })
  }

// addtocart(bugs:any){
// this.detail.addtodetail(bugs);
// }


}
