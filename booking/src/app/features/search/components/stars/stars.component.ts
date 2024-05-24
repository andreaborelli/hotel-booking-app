import { Component, Input } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'app-stars',
  template: `
      <div>
        <i *ngFor="let star of 5 | intToArray; let i = index" class="icon" [ngClass]="{
             'ion-ios-star': i < stars,
             'ion-ios-star-outline': i >= stars
           }">
        </i>
      </div>
      <!-- <div>
        <i *ngFor="let star of 5 | intToArray; let i = index" class="icon" [ngClass]="{
             'ion-ios-star': i < (active?.stars ?? 0),
             'ion-ios-star-outline': i >= (active?.stars ?? 0)
           }">
        </i>
      </div> -->
  `,
  styles: [
  ]
})
export class StarsComponent {

// @Input() active: Hotel | undefined

@Input() stars: number = 0;
}
