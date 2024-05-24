import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  template: `
        <form #contactForm="ngForm" (submit)="send.emit(contactForm.value)">
        <input type="text" placeholder="Your email*" [ngModel] name="email">
        <textarea cols="20" rows="6" placeholder="Your message*" [ngModel] name="msg" required></textarea>
        <button type="submit" [disabled]="contactForm.invalid">SEND</button>
      </form>
  `,
  styles: [
  ]
})
export class ContactFormComponent {

  // does not receive anything as input when you change hotels, but only @Output event

  @Output() send = new EventEmitter<any>();

}
