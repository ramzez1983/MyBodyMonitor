import {Component, OnInit } from '@angular/core';
import {GoogleChartComponent} from './google-chart.component';

@Component({
  templateUrl: './example.component.html',
})
export class ExampleComponent implements OnInit {

  public pieChartData = [
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7] ];
  public pieChartOptions  = {
    title: 'My Daily Activities',
    width: 900,
    height: 500,
  };

  public constructor() {
    return undefined;
  }

  public ngOnInit(): any {
    return undefined;
  }
}
