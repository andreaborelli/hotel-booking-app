import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/model/cart-item';
import { Hotel, Room } from 'src/app/model/hotel';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: CartItem[] = []; // Array per memorizzare gli elementi del carrello

  constructor() { }

  addToCart(hotel: Hotel, room:Room) { // Metodo per aggiungere un elemento al carrello
      // this.items.push({
      //   hotel: hotel,
      //   room: room,
      //   creationDate: Date.now() // timestamp della data di creazione
      // })
      this.items = [
        ...this.items, // spread operator per copiare tutti gli elementi dell'array
        {
          hotel,
          room,
          creationDate: Date.now()
        }
      ]; // approccio immutabile, non modificare l'array originale
  }

  removeFromCart(cartItem: CartItem) { // Metodo per rimuovere un elemento dal carrello
    this.items = this.items.filter(item => item.creationDate !== cartItem.creationDate); // Filtra l'array per rimuovere l'elemento specificato
  }

  proceed(){
    window.alert(this.items.length);
  }
}
