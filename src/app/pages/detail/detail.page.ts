import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Tu pedido ya esta en camino',
      subHeader: 'Gracias por ayudar al Planeta',
      message: '#etiquetaVerde, reduciste un 15% tu huella de CO2',
    
      buttons: ['OK']
    });

    await alert.present();
  }
}
