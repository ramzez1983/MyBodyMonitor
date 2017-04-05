import { Injectable } from '@angular/core';
import { Histogram }  from './histogram';
import { WEIGHTS }    from './mock-stats';

@Injectable()
export class StatsService {
  public getStats(): Histogram[] {
    return WEIGHTS;
  }
}
