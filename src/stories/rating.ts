import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { NgbRating, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap/rating/rating.module';

storiesOf('Rating', module)
  .add('default', () => ({
    moduleMetadata: {
      providers: [NgbRatingConfig],
    },
    component: NgbRating,
    props: {
        rate: 8,
        hover: action('hover'),
        leave: action('leave'),
        rateChange: action('rateChange')
    },
  }))
  .add('custom max', () => ({
    moduleMetadata: {
      providers: [NgbRatingConfig],
    },
    component: NgbRating,
    props: {
        rate: 3,
        max: 5,
        hover: action('hover'),
        leave: action('leave'),
        rateChange: action('rateChange')
    },
  }))
  .add('readonly', () => ({
    moduleMetadata: {
      providers: [NgbRatingConfig],
    },
    component: NgbRating,
    props: {
        rate: 8,
        readonly: true,
        hover: action('hover'),
        leave: action('leave'),
        rateChange: action('rateChange')
    },
  }))
  .add('resettable', () => ({
    moduleMetadata: {
      providers: [NgbRatingConfig],
    },
    component: NgbRating,
    props: {
        rate: 8,
        resettable: true,
        hover: action('hover'),
        leave: action('leave'),
        rateChange: action('rateChange')
    },
  }))
  .add('custom start template', () => ({
    moduleMetadata: {
      providers: [NgbRatingConfig],
      declarations: [NgbRating]
    },
    props: {
      currentRate: 8
    },
    template: `
      <style>
        .star {
          font-size: 1.5rem;
          color: #b0c4de;
        }
        .filled {
          color: #1e90ff;
        }
        .bad {
          color: #deb0b0;
        }
        .filled.bad {
          color: #ff1e1e;
        }
      </style>

      <ngb-rating [(rate)]="currentRate">
        <ng-template let-fill="fill" let-index="index">
          <span class="star" [class.filled]="fill === 100" [class.bad]="index < 3">&#9733;</span>
        </ng-template>
      </ngb-rating>

      <hr>

      <pre>Rate: <b>{{currentRate}}</b></pre>
    `
  }))
  .add('custom decimal rating', () => ({
    moduleMetadata: {
      providers: [NgbRatingConfig],
      declarations: [NgbRating]
    },
    props: {
      currentRate: 3.14
    },
    template: `
      <style>
        .star {
          position: relative;
          display: inline-block;
          font-size: 3rem;
          color: #d3d3d3;
        }
        .full {
          color: red;
        }
        .half {
          position: absolute;
          display: inline-block;
          overflow: hidden;
          color: red;
        }
      </style>

      <ng-template #t let-fill="fill">
        <span class="star" [class.full]="fill === 100">
          <span class="half" [style.width.%]="fill">&hearts;</span>&hearts;
        </span>
      </ng-template>

      <ngb-rating [(rate)]="currentRate" [starTemplate]="t" [readonly]="true" max="5"></ngb-rating>

      <hr>
      <pre>Rate: <b>{{currentRate}}</b></pre>
      <button class="btn btn-sm btn-outline-primary" (click)="currentRate = 1.35">1.35</button>
      <button class="btn btn-sm btn-outline-primary" (click)="currentRate = 4.72">4.72</button>
    `
  }));
