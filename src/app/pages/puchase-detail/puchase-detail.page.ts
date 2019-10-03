import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puchase-detail',
  templateUrl: './puchase-detail.page.html',
  styleUrls: ['./puchase-detail.page.scss'],
})
export class PuchaseDetailPage implements OnInit {

  aggregates = [
    {
      option: 'Insalata de PASTA INTEGRALE',
      icon: 'leaf',
      selected: true,
      color: 'success'
    },
    {
      option: 'Mix espinaca con Pepino en Rodajas',
      icon: 'heart-empty',
      selected: false,
      color: 'success'
    },
    {
      option: 'Ensala de RUCULA con semillas de ZAPALLO',
      icon: 'remove-circle-outline',
      selected: false,
      color: 'medium'
    },
    {
      option: 'Humus de PALTA',
      icon: 'close-circle-outline',
      selected: false,
      color: 'medium'
    }

  ]


  dressing = [
    {
      options: 'LIMONETA de la casa',
      selected: true,
      color: 'success'
    },
    {
      options: 'Yogurt natural - MENTA fresca',
      selected: false,
      color: 'medium'
    },
    
    {
      options: 'Mostaza a la MIEL',

      selected: false,
      color: 'medium'
    },
    {
      options: 'Vinagreta de FRAMBUESA',

      selected: false,
      color: 'medium'
    }
  ];


  topping = [
    {
     option: 'Semilla de CHIA',
      icon: 'bicycle',
      selected: true,
      color: 'success'
    },
    {
      option: 'Semilla de girasol',
      icon: 'close-circle-outline',
      selected: false,
      color: 'medium'
    }, {
      option: 'Nueves caramelizadas',
       icon: 'bicycle',
       selected: true,
       color: 'success'
     },
     {
      option: 'Semillas de ZAPALLO',
       icon: 'bicycle',
       selected: true,
       color: 'success'
     }

  ];


  disposable = [
    {
      option: 'No, quiero bajar mi huella de CO2 (Predeterminado Elige Verde)',
       selected: true,
       color: 'success'
     },
     {
      option: 'Si, esta vez quiero elementos desechables',
       selected: true,
       color: 'success'
     },
  ]

  constructor() { }

  ngOnInit() {
  }

}
