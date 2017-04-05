import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

import { HistogramComponent }     from './histogram.component';
import { StatsDetailsComponent }  from './stats-details.component';

import { ExampleComponent }   from './example.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',    component: DashboardComponent },
  { path: 'detail/:id',   component: HeroDetailComponent },
  { path: 'heroes',       component: HeroesComponent },
  { path: 'hist',         component: HistogramComponent },
  { path: 'stats/:id',  component: StatsDetailsComponent },
  { path: 'example',      component: ExampleComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
