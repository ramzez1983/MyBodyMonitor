import { Component, OnInit }      from '@angular/core';
import { Router }                 from '@angular/router';
import { StatsService }           from './stats.service';
import { BodyStats }              from './bodyStats';

@Component({
  selector: 'my-weight',
  styleUrls: [ 'assets/app/heroes.component.css' ],
  providers: [ StatsService ],
  templateUrl: 'assets/app/stats.component.html',
})
export class StatsComponent implements OnInit {
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
