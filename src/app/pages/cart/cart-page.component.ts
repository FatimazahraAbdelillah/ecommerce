/**
 * Created by andrew.yang on 7/31/2017.
 */
import {Component, OnInit} from '@angular/core';
import {CartBaseComponent} from "./cart-base.component";
import {CartService} from "../../services/cart.service";
import {CompteService} from '../../services/compte.service';

@Component({
    selector: 'app-cart-page',
    styleUrls: ['cart-page.component.css'],
    templateUrl: 'cart-page.component.html'
})
export class CartPageComponent extends CartBaseComponent implements OnInit {
  cardholder = '';
  cardnumber = '';
  cvc = '';
  private compte: any;
    constructor(protected cartService: CartService, private  compteService: CompteService) {
        super(cartService);
    }
  isShowDivIf = true;

  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }
    ngOnInit() {
    }

    changeQuantity = (cart, quantity) => {
        cart.quantity = quantity;
        this.cartService.reloadCart(this.cartList);
    }

  payer() {
    this.compteService.Retrait(this.cvc, this.totalPrice).subscribe(data => {
      this.compte = data;
    }, err => {
      console.log(err);
    })
    console.log('doooonee');
  }
}
