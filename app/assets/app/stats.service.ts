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

  public getDetailedStats(id: number): Promise<Histogram> {
    return this.getStats()
               .then(stats => stats.find(stat => stat.id === id));
  }
}
