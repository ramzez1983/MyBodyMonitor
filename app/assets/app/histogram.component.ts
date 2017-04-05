import { Component, OnInit }      from '@angular/core';
import { Router }                 from '@angular/router';
import { Histogram }              from './histogram';
import { StatsService }           from './stats.service';

@Component({
  selector: 'my-weight',
  styleUrls: [ 'assets/app/heroes.component.css' ],
  providers: [ StatsService ],
  template: `
    <h1>{{title}}</h1>
    <h2>Weight Histogram</h2>
    <ul class="heroes">
      <li *ngFor="let weight of weightHist"
        [class.selected]="weight === selectedWeight"
        (click)="onSelect(weight)">
       <span class="badge">{{weight.dateLabel}}</span>
       <span>{{weight.value}}</span>
       <button class="delete" (click)="gotoDetail(weight.id)">Edit</button>
      </li>
    </ul>
  `,
})
export class HistogramComponent implements OnInit {
  /* currently unused */
  public selectedWeight: Histogram;
  public weightHist: Histogram[];

  constructor(
    private statsService: StatsService,
    private router: Router) { }

  public ngOnInit(): void {
    this.getStats();
  }

  public getStats(): void {
      this.statsService.getStats().then(stats => this.weightHist = stats);
    }

  public onSelect(weight: Histogram): void {
    this.selectedWeight = weight;
  }

  public gotoDetail(id: number): void {
    this.router.navigate(['/stats', id]);
  }
}
