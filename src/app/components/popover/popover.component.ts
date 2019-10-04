import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const controller = document.querySelector('ion-alert-controller');
    const button = document.querySelector('ion-button');
    button.addEventListener('click', handleButtonClick);
    function handleButtonClick() {
      controller.create({
        header: 'Use this lightsaber?',
        message: 'Do you agree to use this lightsaber to do good across the galaxy?',
        buttons: ['Disagree', 'Agree']
      }).then(alert => {
        alert.present();
      });
    }
  }

}
