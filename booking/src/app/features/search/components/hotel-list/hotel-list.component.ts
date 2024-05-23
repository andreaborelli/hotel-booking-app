import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'app-hotel-list',
  template: `
<div class="font-big">Hotel in {{text}}</div>
<div class="horiz-grid separator"
    *ngFor="let hotel of hotels"
    (click)="setActive.emit(hotel)"
    [ngClass]="{'active': hotel.id === active?.id}
    ">
  <div>
    <img src="https://picsum.photos/100/100/?image=11" width="100" height="100">
  </div>
  <div>{{hotel.name}}</div>
  <div>{{hotel.rooms[0].price}}</div>
</div>
  <div class="separator"></div>
  <div class="horiz-grid">
  <div></div>
  <em>{{hotels.length}} results</em>
</div>
  `,
  styles: [
  ]
})
export class HotelListComponent {

  @Input() hotels: Hotel[] = []; // hotels is an array of Hotel objects
  @Input() active: Hotel | undefined; // active is a Hotel object or undefined
  @Input() text: string = ''; // text is a string
  @Output() setActive  = new EventEmitter<Hotel>(); // setActive is an EventEmitter of Hotel objects

}
