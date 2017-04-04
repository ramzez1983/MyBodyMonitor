import { Component, OnInit} from '@angular/core';
declare var google: any;
@Component({
  selector: 'chart',
})
export class GoogleChartComponent implements OnInit {
  private static googleLoaded: any;

  public constructor() {
      return;
  }

  public getGoogle() {
      return google;
  }
  public ngOnInit() {
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

  public createDataTable(array: any[]): any {
      return google.visualization.arrayToDataTable(array);
  }
}
