import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-green-edit-profile',
  templateUrl: './green-edit-profile.page.html',
  styleUrls: ['./green-edit-profile.page.scss'],
})
export class GreenEditProfilePage implements OnInit {

  food = [
    {
      title:'Vegetariana',
      icon:'leaf',
      selected: true,
      color:'success'
    },
    {
      title:'Vegana',
      icon:'heart-empty',
      selected: false,
      color:'success'
    },
    {
      title:'Sin Gluten',
      icon:'remove-circle-outline',
      selected: false,
      color:'medium'
    },
    {
      title:'Sin Preferencia',
      icon:'close-circle-outline',
      selected: false,
      color:'medium'
    }

  ]

  plastic = [
    {
      title:'Sin elementos desechables',
      icon:'globe',
      selected: true,
      color:'success'
    },
    {
      title:'Sin Preferencia',
      icon:'close-circle-outline',
      selected: false,
      color:'medium'
    }
]


delivery = [
  {
    title:'Despacho en Bicicleta',
    icon:'bicycle',
    selected: true,
    color:'success'
  },
  {
    title:'Sin Preferencia',
    icon:'close-circle-outline',
    selected: false,
    color:'medium'
  }

]


recycling = [
  {
    title:'Con reciclaje',
    icon:'sync',
    selected: true,
    color:'success'
  },
  {
    title:'Sin Preferencia',
    icon:'close-circle-outline',
    selected: false,
    color:'medium'
  }
]

  constructor() { }

  ngOnInit() {
  }

}
