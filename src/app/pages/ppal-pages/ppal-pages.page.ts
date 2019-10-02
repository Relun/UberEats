import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppal-pages',
  templateUrl: './ppal-pages.page.html',
  styleUrls: ['./ppal-pages.page.scss'],
})
export class PpalPagesPage implements OnInit {
  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '../../../assets/img-purchase/carouselVerde.png',
      titulo: 'imagen 2', desc: 'algo por aca'
    },
    {
      img: '../../../assets/img-purchase/carouselCOmida.png',
      titulo: 'imagen 1',
      desc: 'algo por aqui'
    }
  
  ];


  categorias = ['Sort', 'Price Range', 'Max Delivery Fee', 'Dietary' ];
  color= 'primary'
  constructor() { }

  ngOnInit() {
  }

}
