import { Component }          from '@angular/core';
import { Histogram }          from './histogram';

const WEIGHTS: Histogram[] = [
  new Histogram(new Date('2016-02-04T00:00:00'), 55.1 ),
  new Histogram(new Date('February 5, 2016 10:13:00'), 55.3 ),
  new Histogram(new Date('February 6, 2016 10:13:00'), 55.5 ),
  new Histogram(new Date('February 7, 2016 10:13:00'), 55.6 ),
  new Histogram(new Date('February 8, 2016 10:13:00'), 55.6 ),
  new Histogram(new Date('February 9, 2016 10:13:00'), 55.9 ),
];

@Component({
  styleUrls: [ 'assets/app/heroes.component.css' ],
  template: `
    <h1>{{title}}</h1><h2>{{hero}} details!</h2>
    <h2>Weight Histogram</h2>
    <ul class="heroes">
      <li *ngFor="let weight of weightHist">
       <span class="badge">{{weight.dateLabel}}</span> {{weight.value}}
      </li>
    </ul>
  `,
})
export class HistogramComponent {
  public title = 'Testowy tytuł';
  public hero = 'Testowy user';
  public weightHist = WEIGHTS;
}
