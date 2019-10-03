import { Component, OnInit } from '@angular/core';
import { RestourantJsonService } from '../../services/restourant-json.service';
import { RestaurantsItem } from '../../interfaces/interfaces';



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
 
  restaurantCard : RestaurantsItem[]=[];
  rests:any;

  constructor(private restaurantService : RestourantJsonService) { }

  ngOnInit() {

    let a = this.restaurantService.getRestaurant();
     let b = a.restaurants_Item;
     console.log(b)
     this.rests = b;
     console.log(this.rests)

  }

}
