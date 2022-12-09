import { Component, EventEmitter, Input, OnInit, Output, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any[] = JSON.parse(localStorage.getItem('cart') || '{}');
  productToUpdate: any[] = [];
  priceStringToInt = 0;
  totalCosts = "0$";
  totalInCart = 0;

  ngOnInit() {
      this.calculateTotalCosts();
  }


  calculateTotalCosts() {
    this.totalInCart = 0;

    if(this.cartItems.length!=0) {

        this.cartItems.forEach((el) => {
            this.totalInCart += Number(el['totalCosts'].substring(0, el['totalCosts'].length-1));
        })
    }
    this.totalCosts = this.totalInCart+"$";
  }

  changeQuantity(product: any, operator: any) {
    if(this.cartItems != null || this.cartItems !== '{}') {

        this.productToUpdate = this.cartItems.find(obj => obj.id == product.id);

        this.productToUpdate['quantity'] = operator == '+' ?
         this.productToUpdate['quantity']+1 :
         this.productToUpdate['quantity']-1;
        if(this.productToUpdate['quantity'] > 0) {
            this.priceStringToInt = this.productToUpdate['specifications']['price'].substring(0, this.productToUpdate['specifications']['price'].length-1);
            this.productToUpdate['totalCosts'] = this.productToUpdate['quantity'] * this.priceStringToInt + "$";
            this.cartItems.map(el => el.id == this.productToUpdate['id'] || el)
        }
        else {
            this.cartItems = this.cartItems.filter(el => el['id'] != this.productToUpdate['id'])
        }
        localStorage.setItem("cart", JSON.stringify(this.cartItems));
        this.calculateTotalCosts();
    }
  }

  removeQuantity(product: any) {
      this.changeQuantity(product, '-');
  }

  addQuantity(product: any) {
      this.changeQuantity(product, '+');
  }
}
