import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { BodyStats } from './bodyStats';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class StatsService {

  private delayMs = 500;
  private headers = new Headers({'Content-Type': 'application/json'});
  private statsUrl = 'api/stats';

  constructor(private http: Http) { }

  public getBodyStats(): Promise<BodyStats[]> {
    return this.http.get(this.statsUrl)
                     .toPromise()
                     .then(response => (response.json().stats as BodyStats[]).map(s => new BodyStats(s)))
                     .catch(this.handleError);
  }

  public getDetailedStats(id: number): Promise<BodyStats> {
    return this.getBodyStats()
      .then(result => result.find(h => h._id === id));
  }

  // Fake server update; assume nothing can go wrong
  public updateBodyStats(body: BodyStats): Observable<BodyStats>  {
    const oldHero = this.getDetailedStats(body._id);
    const newHero = Object.assign(oldHero, body); // Demo: mutate cached hero
    return of(newHero).delay(this.delayMs); // simulate latency with delay
  }

  private handleError(error: any): Promise<any> {
//    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
