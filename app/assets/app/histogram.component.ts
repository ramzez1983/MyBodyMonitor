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
      <li *ngFor="let weight of weightHist"
        [class.selected]="weight === selectedWeight"
        (click)="onSelect(weight)">
       <span class="badge">{{weight.date | date:format}}</span>
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

  private series: any[];
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
      this.statsService.getStats().then(stats => this.weightHist = stats);
      this.statsService.getBodyStats().then(stats => this.stats = stats);
      this.series = ['date', 'weight', 'fatPercent', 'bonesPercent'];
    }

  public onSelect(weight: Histogram): void {
    this.selectedWeight = weight;
  }

  public gotoDetail(id: number): void {
    this.router.navigate(['/stats', id]);
  }
}
