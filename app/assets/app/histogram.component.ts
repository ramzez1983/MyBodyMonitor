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
  selector: 'my-weight',
  styleUrls: [ 'assets/app/heroes.component.css' ],
  template: `
    <h1>{{title}}</h1>
    <div *ngIf="selectedWeight">
      <div><label>date: </label>{{selectedWeight.dateLabel}}</div>
      <div>
          <label>weight: </label>
          <input [(ngModel)]="selectedWeight.value" placeholder="weight"/>
      </div>
    </div>
    <h2>Weight Histogram</h2>
    <ul class="heroes">
      <li *ngFor="let weight of weightHist"
        [class.selected]="weight === selectedWeight"
        (click)="onSelect(weight)">
       <span class="badge">{{weight.dateLabel}}</span> {{weight.value}}
      </li>
    </ul>
  `,
})
export class HistogramComponent {
  public title = 'Testowy tytuł';
  public selectedWeight: Histogram;
  public weightHist = WEIGHTS;

  public onSelect(weight: Histogram): void {
    this.selectedWeight = weight;
  }
}
