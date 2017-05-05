import { Injectable } from '@angular/core';
import { BodyStats }  from './bodyStats';
import { BODYSTATS }  from './mock-stats';
import { Observable } from 'rxjs/Observable';
import { of }         from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class StatsService {

  private delayMs = 500;

  public getBodyStats(): Promise<BodyStats[]> {
    return Promise.resolve(BODYSTATS);
  }

  public getDetailedStats(id: number): Promise<BodyStats> {
    return Promise.resolve(BODYSTATS.find(h => h.id === id));
  }

  // Fake server update; assume nothing can go wrong
  public updateBodyStats(body: BodyStats): Observable<BodyStats>  {
    const oldHero = BODYSTATS.find(h => h.id === body.id);
    const newHero = Object.assign(oldHero, body); // Demo: mutate cached hero
    return of(newHero).delay(this.delayMs); // simulate latency with delay
  }
}
