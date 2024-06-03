import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-news-letter-form',
  template: `
          <form #nf="ngForm" (submit)="news.emit(nf.value)">
          <input type="text" placeholder="Your email*" [ngModel] name="email" required>
          <button type="submit"[disabled]="nf.invalid">ISCRIVITI</button>
        </form>
  `,
  styles: [
  ]
})
export class NewsLetterFormComponent {

@Output() news = new EventEmitter<any>();


}
