import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GreenProfileSummaryPage } from './green-profile-summary.page';
import { MenuThreeComponent } from 'src/app/components/menu-three/menu-three.component';

const routes: Routes = [
  {
    path: '',
    component: GreenProfileSummaryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GreenProfileSummaryPage,MenuThreeComponent]
})
export class GreenProfileSummaryPageModule {}
