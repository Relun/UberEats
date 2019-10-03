import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ppal-pages', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'profile-summary', loadChildren: './pages/profile-summary/profile-summary.module#ProfileSummaryPageModule' },
  { path: 'account', loadChildren: './pages/account/account.module#AccountPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'restourant', loadChildren: './pages/restourant/restourant.module#RestourantPageModule' },
  { path: 'menu-restaurant', loadChildren: './pages/menu-restaurant/menu-restaurant.module#MenuRestaurantPageModule' },
  { path: 'puchase-detail', loadChildren: './pages/puchase-detail/puchase-detail.module#PuchaseDetailPageModule' },
  { path: 'git-process', loadChildren: './pages/git-process/git-process.module#GitProcessPageModule' },
  { path: 'ppal-pages', loadChildren: './pages/ppal-pages/ppal-pages.module#PpalPagesPageModule' },  { path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
  { path: 'green-account', loadChildren: './pages/green-account/green-account.module#GreenAccountPageModule' },
  { path: 'green-profile-summary', loadChildren: './pages/green-profile-summary/green-profile-summary.module#GreenProfileSummaryPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
