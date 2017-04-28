import { Injectable } from '@angular/core';
import { Histogram }  from './histogram';
import { BodyStats }  from './bodyStats';
import { WEIGHTS, BODYSTATS }    from './mock-stats';

@Injectable()
export class StatsService {

  public getBodyStats(): Promise<BodyStats[]> {
    return Promise.resolve(BODYSTATS);
  }

  public getDetailedStats(id: number): Promise<Histogram> {
    return Promise.resolve(WEIGHTS[1]);
  }
}
