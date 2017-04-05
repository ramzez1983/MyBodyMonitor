import { Injectable } from '@angular/core';
import { Histogram }  from './histogram';
import { WEIGHTS }    from './mock-stats';

@Injectable()
export class StatsService {
  public getStats(): Promise<Histogram[]> {
    return Promise.resolve(WEIGHTS);
  }

  public getHeroesSlowly(): Promise<Histogram[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getStats()), 2000);
    });
  }

}
