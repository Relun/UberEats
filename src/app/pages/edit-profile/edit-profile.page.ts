import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

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

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Perfil Elige Verde creado',
      subHeader: 'Tu huella de CO2 se ha reducido en un:',
      message: 'Muchas gracias por ayudar al planeta',
      buttons: ['OK']
      
    });

    await alert.present();
  }
}
