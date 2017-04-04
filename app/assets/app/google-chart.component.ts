import {Directive, ElementRef, Input, OnInit} from '@angular/core';
declare var google: any;
declare var googleLoaded: any;
@Directive({
  selector: '[GoogleChart]',
})
export class GoogleChartComponent implements OnInit {
  public nativeElement: any;
  @Input('chartType') public chartType: string;
  @Input('chartOptions') public chartOptions: Object;
  @Input('chartData') public chartData: Object;
  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
  }
  public ngOnInit() {
    setTimeout(
      () => {
        google.charts.load('current', {packages: ['corechart']});
        setTimeout(
          () => {
            this.drawGraph(this.chartOptions, this.chartType, this.chartData, this.nativeElement);
          },
          1000);
      },
      1000);
  }
  public drawGraph (chartOptions: any, chartType: any, chartData: any, ele: any) {
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      let wrapper = new google.visualization.ChartWrapper({
        chartType: chartType,
        dataTable: chartData,
        options: chartOptions || {},
        containerId: ele.id,
      });
      wrapper.draw();
    }
  }
}
