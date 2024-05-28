import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';



@NgModule({
  declarations: [CartComponent], // no exports perchè non è un modulo condiviso, ma usa il routing
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path:'', component: CartComponent }
    ])
  ]
})
export class CartModule { }
