import { Component, Input } from '@angular/core';
import { Histogram } from './histogram';

@Component({
  selector:     'stats-details',
  templateUrl:  'assets/app/stats-details.component.html',
})
export class StatsDetailsComponent {
  @Input() public bodyStats: Histogram;
}
