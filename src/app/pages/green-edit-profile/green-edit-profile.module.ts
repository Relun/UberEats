import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GreenEditProfilePage } from './green-edit-profile.page';

const routes: Routes = [
  {
    path: '',
    component: GreenEditProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GreenEditProfilePage]
})
export class GreenEditProfilePageModule {}
