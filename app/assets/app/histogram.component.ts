import { Component, OnInit }      from '@angular/core';
import { Router }                 from '@angular/router';
import { Histogram }              from './histogram';
import { StatsService }           from './stats.service';
import { BodyStats }              from './bodyStats';

@Component({
  selector: 'my-weight',
  styleUrls: [ 'assets/app/heroes.component.css' ],
  providers: [ StatsService ],
  template: `
    <h1>{{title}}</h1>
    <bodychart [series]="series" [stats]="stats"></bodychart>
    <h2>Weight Histogram</h2>
    <ul class="heroes">
      <li *ngFor="let statRow of stats"
        [class.selected]="statRow === selectedStatRow"
        (click)="onSelect(statRow)">
       <span class="badge">{{statRow.date | date:format}}</span>
       <span class="cellodd">{{statRow.weight}}</span>
       <span class="celleven">{{statRow.fatPercent}}</span>
       <span class="cellodd">{{statRow.calories}}</span>
       <button class="delete" (click)="gotoDetail(statRow.id)">Edit</button>
      </li>
    </ul>
  `,
})
export class HistogramComponent implements OnInit {
  /* currently unused */
  public selectedStatRow: BodyStats;
  private series: string[];
  private stats: BodyStats[];

  constructor(
    private statsService: StatsService,
    private router: Router) { }

  get format() {
    /*TODO date format to be read from user profile*/
    return  'dd-MM-yyyy';
  }

  public ngOnInit(): void {
    this.getStats();
  }

  public getStats(): void {
      this.statsService.getBodyStats().then(stats => this.stats = stats);
      this.series = ['date', 'weight', 'fatPercent', 'bonesPercent'];
    }

  public onSelect(statRow: BodyStats): void {
    this.selectedStatRow = statRow;
  }

  public gotoDetail(id: number): void {
    this.router.navigate(['/stats', id]);
  }
}
