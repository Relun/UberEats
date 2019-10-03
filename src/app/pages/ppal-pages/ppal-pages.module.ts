 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PpalPagesPage } from './ppal-pages.page';
import { MenuTwoComponent } from '../../components/menu-two/menu-two.component';

const routes: Routes = [
  {
    path: '',
    component: PpalPagesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PpalPagesPage,MenuTwoComponent]
})
export class PpalPagesPageModule {}