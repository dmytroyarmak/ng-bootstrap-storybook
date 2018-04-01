import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ngb-rating [(rate)]="currentRate"></ngb-rating>
    <hr>
    <pre>Rate: <b>{{currentRate}}</b></pre>
  `,
  styles: []
})
export class AppComponent {
  currentRate = 8;
}
