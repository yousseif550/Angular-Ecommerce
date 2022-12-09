import { ProfilComponent } from './../profil/profil.component';
import { CartComponent } from './../cart/cart.component';
import { ShopComponent } from './../shop/shop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'Shop', component: ShopComponent},
  { path: 'Cart', component: CartComponent},
  { path: 'Profil', component: ProfilComponent},
  { path: '', redirectTo: '/Shop', pathMatch: 'full' }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
