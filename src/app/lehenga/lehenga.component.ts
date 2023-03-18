import { AfterViewInit, Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-lehenga',
  templateUrl: './lehenga.component.html',
  styleUrls: ['./lehenga.component.scss']
})
export class LehengaComponent implements AfterViewInit {

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
