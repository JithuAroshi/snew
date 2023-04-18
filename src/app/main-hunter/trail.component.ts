import { Component } from '@angular/core';


@Component({
  selector: 'app-main-hunter',
  templateUrl: './trail.component.html',
  styleUrls: ['./trail.component.scss'],
})



export class TrailComponent {



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
