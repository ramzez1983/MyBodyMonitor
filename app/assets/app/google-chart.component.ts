import { Component, OnChanges, SimpleChange} from '@angular/core';
declare const google: any;
@Component({
  selector: 'chart',
})
export class GoogleChartComponent implements OnChanges {
  private static googleLoaded: any;

  public constructor() {
      return;
  }

  public getGoogle() {
      return google;
  }

  public ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if (!GoogleChartComponent.googleLoaded) {
      GoogleChartComponent.googleLoaded = true;
      google.charts.load('current',  {packages: ['corechart', 'bar']});
    }
    google.charts.setOnLoadCallback(() => this.drawGraph());
  }

  public drawGraph() {
      return;
  }

  public createBarChart(element: any): any {
      return new google.visualization.BarChart(element);
  }

  public createLineChart(element: any): any {
      return new google.visualization.LineChart(element);
  }

  public createDataTable(array: any[]): any {
      return google.visualization.arrayToDataTable(array);
  }
}
