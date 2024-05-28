import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { Hotel, Room } from 'src/app/model/hotel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  text = "Milan";
  hotels: Hotel[] = []; // Array per memorizzare i risultati della ricerca
  active: Hotel | undefined; // Variabile per memorizzare l'hotel attivo
  activeImage: string | undefined; // Variabile per memorizzare l'immagine attiva

  constructor(
    public cart: CartService,
    private http: HttpClient,
    private router: Router
  ) {
    // Il costruttore inietta il servizio HttpClient
  }

  ngOnInit() {
    // Metodo di ciclo di vita di Angular chiamato quando il componente viene inizializzato
    const savedHotels = localStorage.getItem('hotels'); // Recupera i dati dei risultati salvati dal localStorage
    if (savedHotels) {
      // Se i dati esistono nel localStorage
      this.hotels = JSON.parse(savedHotels); // Parsea i dati JSON e li assegna all'array hotels
    } else {
      // Se i dati non esistono nel localStorage
      this.searchHotels(this.text); // Esegue una ricerca predefinita con il testo "Milan"
    }
  }

  searchHotels(text: string) {// Metodo per cercare hotel basato sul testo fornito
    this.text = text; // Assegna il testo fornito alla variabile text
    this.http.get<Hotel[]>(`http://localhost:3000/hotels?city=` + text) // Effettua una richiesta HTTP GET all'URL specificato e ottiene un array di oggetti Hotel
      .subscribe(result => { // Iscrizione all'osservabile per ottenere i risultati della richiesta
        if (!result.length) {
          this.router.navigateByUrl('search/no-results'); // Se non ci sono risultati, reindirizza alla pagina no-results
          return; // Termina la funzione
        } // Se non ci sono risultati
        this.hotels = result; // Assegna i risultati all'array hotels
        this.setActive(this.hotels[0]); // Imposta il primo hotel come attivo
        localStorage.setItem('hotels', JSON.stringify(this.hotels)); // Salva i risultati nel localStorage come stringa JSON
        console.log(this.hotels); // Stampa i risultati nella console
      });
  }
  setActive(hotel: Hotel) { // Metodo per impostare l'hotel attivo
    this.active = hotel; // Assegna l'hotel fornito alla variabile active
    // console.log(hotel); // Stampa l'hotel nella console
    this.activeImage = hotel.images[0]; // Imposta la prima immagine dell'hotel come immagine attiva
  }

  sendEmail({email, msg}: {email: string, msg: string}) { // Metodo per inviare un'email all'hotel attivo
    // console.log('Sending email to: ', email, msg, this.active.email); // Stampa l'email nella console
    window.alert(`sent:
    ${email}
    ${msg}
    ${this.active!.email}`);// {} espressione di template string}
  }

  addToCart(room: Room, active: Hotel) { // Metodo per aggiungere un hotel al carrello
    this.cart.addToCart(active, room); // Chiama il metodo addToCart del servizio CartService
    // console.log('Adding to cart:', room, active); // Stampa la stanza e l'hotel attivo nella console
  }
}
