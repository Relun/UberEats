 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PpalPagesPage } from './ppal-pages.page';

import { MenuComponent } from '../../components/menu/menu.component';

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
  declarations: [PpalPagesPage,MenuComponent]
})
export class PpalPagesPageModule {}