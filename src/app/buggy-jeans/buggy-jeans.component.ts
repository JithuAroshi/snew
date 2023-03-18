import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { DetailService } from '../detail.service';
import { CategoryService } from '../service/category.service';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-buggy-jeans',
  templateUrl: './buggy-jeans.component.html',
  styleUrls: ['./buggy-jeans.component.scss']
})
export class BuggyJeansComponent {

  // array:any;
  detailitem:any;
  categoryarray:any = []
  postarray:any = [];
  sidebar = false


  constructor(private datas:ApiserviceService , private detail:DetailService , private categoryser : CategoryService , private route : ActivatedRoute , private postser : PostService ) {}


  ngOnInit():void {

    this.categoryser.loaddata().subscribe(value => {
      this.categoryarray = value
      // console.log(this.categoryarray);
    })

// this.route.params.subscribe(val => {

  this.postser.loaddata().subscribe(post => {
  this.postarray = post;
  // console.log(this.postarray);
  })
// })

  }


  addtodetail(id:any){
    this.detailitem = this.postarray[id]
    // console.log(this.array);
    this.detail.setdetail(this.detailitem)
    this.detail.setcart(id)

  }

  sidebarswipe(){
  this.sidebar = !this.sidebar
  }















bottambar = [
  {
    name: 'Air Force 1',
  },
  {
    name: 'Huarache',
  },
  {
    name: 'Air Max 90',
  },
  {
    name: 'Air Max 95',
  },
  {
    name: 'Air Max 97',
  },
  {
    name: 'Air Max 290',
  },
  {
    name: 'Air Max 720',
  },
  {
    name: 'All Air Max',
  },
  {
    name: 'Vapormax',
  },
];

bottambar2 = [
  {
    name: 'All Shoes',
  },
  {
    name: 'Custom Shoes',
  },
  {
    name: 'Jordan Shoes',
  },
  {
    name: 'Running Shoes',
  },
  {
    name: 'Basketball Shoes',
  },
  {
    name: 'Football Shoes',
  },
  {
    name: 'Gym Shoes',
  },
  {
    name: 'Lifestyle Shoes',
  },
];

bottambar3 = [
  {
    name: 'All Clothing',
  },
  {
    name: 'Modest Wear',
  },
  {
    name: 'Hoodies & Pullovers',
  },
  {
    name: 'Shirt & Tops',
  },
  {
    name: 'Jackets',
  },
  {
    name: 'Compression & Nike Pro',
  },
  {
    name: 'Trousers & Leggings',
  },
  {
    name: 'Shorts',
  },
];

bottambar4 = [
  {
    name: 'Kids Shoes',
  },
  {
    name: 'Kids Shoes',
  },
  {
    name: 'Kids Jordan Shoes',
  },
  {
    name: 'Kids Basketball Shoes',
  },
  {
    name: 'Kids Running Shoes',
  },
  {
    name: 'Kids Clothing',
  },
  {
    name: 'Kids Clothing',
  },
  {
    name: 'Kids Backpacks',
  },
  {
    name: 'Kids Socks',
  },
];

}
