import {Component, Input, OnInit } from '@angular/core';
import {GoogleChartComponent} from './google-chart.component';
import {BodyStats} from './bodyStats';

@Component({
  selector: 'bodychart',
  template: `
    <div class="four wide column center aligned">
        <div id="bodychart_div" style="width: 900px; height: 500px;"></div>
    </div>
  `,
})
export class BodyChartComponent extends GoogleChartComponent {
  @Input() public series: any[];
  @Input() public stats: BodyStats[];

  private options: any;
  private data: any;
  private chart: any;

  public drawGraph() {
    let rows = this.stats.map((s: BodyStats) => s.getDataForSeries(this.series));
    this.data = this.createDataTable([this.series].concat(rows));

    this.options = {
      title: 'My body stats',
      legend: { position: 'bottom' },
      chartArea: {width: '80%'},
      vAxis: {
        title: 'Value',
      },
      hAxis: {
        title: 'Days',
      },
      interpolateNulls: true,
    };

    this.chart = this.createLineChart(document.getElementById('bodychart_div'));
    this.chart.draw(this.data, this.options);
  }
}
