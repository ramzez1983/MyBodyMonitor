import { Component }          from '@angular/core';

@Component({
//  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/hist" routerLinkActive="active">Histograms</a>
      <a routerLink="/example" routerLinkActive="active">ChartExample</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['assets/app/app.component.css'],
})
export class AppComponent {
  public title = 'Tour of Heroes';
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
