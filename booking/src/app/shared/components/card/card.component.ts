import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div>
     <div class="title" *ngIf="title">{{title}}</div>   <!-- se title è definito allora stampa il titolo -->
      <div [ngClass]="{
        'content': padding,
        'center': centeredContent
      }"> <!-- se padding e center è true allora aggiungi la classe content e center altrimenti nulla -->
        <ng-content></ng-content>
      </div>
    </div>

    <!-- <div class="card side-bar scrollable">
      <div class="title">Search</div>
      <div class="content">
      </div>
    </div> -->

  `,
  styles: [
  ]
})
export class CardComponent {

  @Input() title: string | undefined;
  @Input() isScrollable: boolean = false;
  @Input() customCls: string | undefined;
  @Input() centeredContent: boolean = false;
  @Input() padding: boolean = true;

  @HostBinding('className') get className() {
    let cls = 'card'; // default class
    cls += this.isScrollable ? ' scrollable' : ''; // se isScrollable è true aggiungo la classe scrollable oppure nulla
    cls += this.customCls ? ` ${this.customCls}` : ''; // se customCls è definito dall'esterno aggiungo la classe customCls altrimenti nulla
    return cls; // ritorno la stringa con le classi

  }

  /* tramite il decoratore @HostBinding possiamo applicare
  a una qualunque proprietà del DOM di quel componente,
  quindi ad app-card una serie di regole css */

}
