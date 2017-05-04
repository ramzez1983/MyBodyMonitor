import { Injectable } from '@angular/core';
import { BodyStats }  from './bodyStats';
import { BODYSTATS }    from './mock-stats';

@Injectable()
export class StatsService {

  public getBodyStats(): Promise<BodyStats[]> {
    return Promise.resolve(BODYSTATS);
  }

  public getDetailedStats(id: number): Promise<BodyStats> {
    return Promise.resolve(BODYSTATS[1]);
  }
}
