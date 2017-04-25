import { Histogram }  from './histogram';
import { BodyStats }  from './bodyStats';

export const WEIGHTS: Histogram[] = [
  new Histogram(1, new Date('2016-02-04T00:00:00'), 55.1 ),
  new Histogram(2, new Date('February 5, 2016 10:13:00'), 55.3 ),
  new Histogram(3, new Date('February 6, 2016 10:13:00'), 55.5 ),
  new Histogram(4, new Date('February 7, 2016 10:13:00'), 55.6 ),
  new Histogram(5, new Date('February 8, 2016 10:13:00'), 55.6 ),
  new Histogram(6, new Date('February 9, 2016 10:13:00'), 55.9 ),
];

export const BODYSTATS: BodyStats[] = [
  new BodyStats(1, new Date('2016-02-04T00:00:00'), 1, 2, 3, 4, 5, 6 ),
  new BodyStats(2, new Date('2016-02-05T00:00:00'), 11, 12, 13, 14, 15, 16 ),
  new BodyStats(3, new Date('2016-02-06T00:00:00'), 7, 1, 1, 8, 2, 6 ),
  new BodyStats(4, new Date('2016-02-07T00:00:00'), 3, 8, 9, 8, 5, 6 ),
  new BodyStats(5, new Date('2016-02-08T00:00:00'), 5, 4, 1, 8, 8, 3 ),
  new BodyStats(6, new Date('2016-02-09T00:00:00'), 2, 5, 9, 8, 2, 6 ),
  new BodyStats(7, new Date('2016-02-10T00:00:00'), 7, 1, 1, 8, 7, 6 ),
  ];
