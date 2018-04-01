import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

storiesOf('Datepicker', module)
  .add('basic', () => ({
    moduleMetadata: {
      imports: [NgbModule.forRoot()],
    },
    props: {
        selectToday() {
            const now = new Date();
            this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
        }
    },
    template: `
        <ngb-datepicker #dp [(ngModel)]="model" (navigate)="date = $event.next"></ngb-datepicker>

        <hr/>

        <button class="btn btn-sm btn-outline-primary" (click)="selectToday()">Select Today</button>
        <button class="btn btn-sm btn-outline-primary" (click)="dp.navigateTo()">To current month</button>
        <button class="btn btn-sm btn-outline-primary" (click)="dp.navigateTo({year: 2013, month: 2})">To Feb 2013</button>

        <hr/>

        <pre>Month: {{ date.month }}</pre>
        <pre>Year: {{ date.year }}</pre>
        <pre>Model: {{ model | json }}</pre>
    `
  }))
