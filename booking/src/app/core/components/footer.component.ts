import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer">
    <div class="horiz-grid-footer">
    <app-card customCls="contact" title="Ottieni le migliori offerte">
      <app-news-letter-form (news)="newsLetter($event)"></app-news-letter-form>
    </app-card>

    </div>
  </footer>
  `,
    styles: [
    ]
})
export class FooterComponent {

  newsLetter(data: {name: string, email: string}) {

    window.alert(`Newsletter subscription sent to: ${data.email}`);
  }

}
