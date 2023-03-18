import { Component, OnInit } from '@angular/core';
import { catchError, of, switchMap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

@Component({
  selector: 'app-main-hunter',
  templateUrl: './trail.component.html',
  styleUrls: ['./trail.component.scss'],
})
export class TrailComponent {


  p = '../../assets/Image/mainshoe1.png';

  pic1() {
    this.p = '../../assets/Image/mainshoe1.png';
  }
  pic2() {
    this.p = '../../assets/Image/mainshoe2.jpg';
  }
  pic3() {
    this.p = '../../assets/Image/mainshoe3.jpg';
  }
  pic4() {
    this.p = '../../assets/Image/mainshoe4.jpeg';
  }

  catogory = [
    {
      img: '../../assets/Image/Group1.png',
    },
    {
      img: '../../assets/Image/Group2.png',
    },
    {
      img: '../../assets/Image/Group3.png',
    },
    {
      img: '../../assets/Image/Group4.png',
    },
  ];

  partcatogory = [
    {
      img: '../../assets/Image/shoeone1.jpg',
      img2: '../../assets/Image/shoetwo1.jpg',
      img3: '../../assets/Image/chapal1.jpg',
      img4: '../../assets/Image/boot1.jpg',
    },

    {
      img: '../../assets/Image/shoeone2.jpg',
      img2: '../../assets/Image/shoetwo2.jpg',
      img3: '../../assets/Image/chapal2.jpg',
      img4: '../../assets/Image/boot2.jpg',
    },

    {
      img: '../../assets/Image/shoeone3.jpg',
      img2: '../../assets/Image/shoetwo3.jpg',
      img3: '../../assets/Image/chapal3.jpg',
      img4: '../../assets/Image/boot3.jpg',
    },

    {
      img: '../../assets/Image/shoeone4.jpg',
      img2: '../../assets/Image/shoetwo4.jpg',
      img3: '../../assets/Image/chapal4.jpg',
      img4: '../../assets/Image/boot4.jpg',
    },

    {
      img: '../../assets/Image/shoeone5.jpg',
      img2: '../../assets/Image/shoetwo5.jpg',
      img3: '../../assets/Image/chapal5.jpg',
      img4: '../../assets/Image/boot5.jpg',
    },

    {
      img: '../../assets/Image/shoeone6.jpg',
      img2: '../../assets/Image/shoetwo6.jpg',
      img3: '../../assets/Image/chapal6.jpg',
      img4: '../../assets/Image/boot6.jpg',
    },
  ];

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
