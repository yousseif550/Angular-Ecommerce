import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing/routing.module';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { ProfilComponent } from './profil/profil.component';
import { ProduitComponent } from './produit/produit.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    CartComponent,
    ProfilComponent,
    ProduitComponent,
    HeaderComponent
  ],
  imports: [
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    RoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [BsDropdownModule,
    TooltipModule,
    ModalModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
