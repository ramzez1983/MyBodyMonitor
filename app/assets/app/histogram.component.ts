import { Component, OnInit }      from '@angular/core';
import { Histogram }              from './histogram';
import { StatsService }           from './stats.service';

@Component({
  selector: 'my-weight',
  styleUrls: [ 'assets/app/heroes.component.css' ],
  providers: [ StatsService ],
  template: `
    <h1>{{title}}</h1>
    <stats-details [bodyStats] = "selectedWeight"></stats-details>
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
export class HistogramComponent implements OnInit {
  public title = 'Testowy tytuł';
  public selectedWeight: Histogram;
  public weightHist: Histogram[];

  constructor(
    private statsService: StatsService) { }

  public ngOnInit(): void {
    this.getStats();
  }

  public getStats(): void {
      this.weightHist = this.statsService.getStats();
    }

  public onSelect(weight: Histogram): void {
    this.selectedWeight = weight;
  }
}
