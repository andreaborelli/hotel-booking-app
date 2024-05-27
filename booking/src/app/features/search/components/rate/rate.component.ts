import { Component, Input } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'app-rate',
  template: `
   <div class="font-superbig">
        {{active?.rate}}
        <i class="ion-ios-person"></i>
      </div>
  `,
  styles: [
  ]
})
export class RateComponent {

  @Input() active: Hotel | undefined

}
