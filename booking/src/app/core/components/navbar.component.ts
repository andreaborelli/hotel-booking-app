import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  template: `
  <!--navigation bar-->
  <div class="navigation" *ngIf="auth.isLogged()">
    <div class="horiz-grid">
      <div class="logo" routerLink="search">BOOKING</div>
      <div class="horiz-grid">
        <span class="btn" routerLink="search" routerLinkActive="active">SEARCH</span>
        <span class="btn" routerLink="cart" routerLinkActive="active">CART ({{cart.items.length}})</span>
        <span class="btn" (click)="auth.logout()">LOGOUT</span>
      </div>
      <!-- <em>{{auth.data?.name}}</em> -->
      <em>{{auth.getUsername()}}</em>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class NavbarComponent {

  @Output() EventEmitter = new EventEmitter();


  constructor(
    public cart: CartService,
    public auth: AuthService
    ) {

   }

}
