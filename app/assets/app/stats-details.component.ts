import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Histogram }                from './histogram';
import { StatsService }             from './stats.service';

@Component({
  selector:     'stats-details',
  templateUrl:  'assets/app/stats-details.component.html',
})
export class StatsDetailsComponent implements OnInit {
  public bodyStats: Histogram;

  constructor(
    private statsService: StatsService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  public ngOnInit(): void {
    this.route.params // tslint:disable-next-line:no-string-literal
      .switchMap((params: Params) => this.statsService.getDetailedStats(+params['id']))
      .subscribe(stats => this.bodyStats = stats);
  }

  public goBack(): void {
    this.location.back();
  }
}
