import {Component, OnInit } from '@angular/core';
import {GoogleChartComponent} from './google-chart.component';

@Component({
  selector: 'evolution',
  template: `
    <div class="four wide column center aligned">
        <div id="chart_divEvolution" style="width: 900px; height: 500px;"></div>
    </div>
  `,
})
export class ExampleComponent extends GoogleChartComponent {
  private options: any;
  private data: any;
  private chart: any;

  public drawGraph() {
    this.data = this.createDataTable([
      ['Evolution', 'Imports', 'Exports'],
      [new Date('2016-02-04T00:00:00'), 55, 60],
      [new Date('2016-02-05T00:00:00'), 61, 58],
      [new Date('2016-02-06T00:00:00'), 51, 52],
      [new Date('2016-02-07T00:00:00'), 61, 54],
      [new Date('2016-02-09T00:00:00'), 51, 52],
      [new Date('2016-02-10T00:00:00'), 55, 55],
      [new Date('2016-02-10T12:00:00'), 56, 56],
      [new Date('2016-02-11T00:00:00'), 52, 62],
      [new Date('2016-02-12T00:00:00'), 52, null],
      [new Date('2016-02-13T00:00:00'), null, 57],
      [new Date('2016-02-15T00:00:00'), 64, 54],
      [new Date('2016-02-16T00:00:00'), 54, 64],
      [new Date('2016-02-17T00:00:00'), 50, 51],
      [new Date('2016-02-19T00:00:00'), 52, 55],
      [new Date('2016-02-20T00:00:00'), 54, 57],
    ]);

    this.options = {
      title: 'Evolution, 2014',
      legend: { position: 'bottom' },
      chartArea: {width: '80%'},
      vAxis: {
        title: 'Value in USD',
      },
      hAxis: {
        title: 'Days',
      },
      interpolateNulls: true,
    };

    this.chart = this.createLineChart(document.getElementById('chart_divEvolution'));
    this.chart.draw(this.data, this.options);
  }
}
