import { Histogram }              from './histogram';

export const WEIGHTS: Histogram[] = [
  new Histogram(1, new Date('2016-02-04T00:00:00'), 55.1 ),
  new Histogram(2, new Date('February 5, 2016 10:13:00'), 55.3 ),
  new Histogram(3, new Date('February 6, 2016 10:13:00'), 55.5 ),
  new Histogram(4, new Date('February 7, 2016 10:13:00'), 55.6 ),
  new Histogram(5, new Date('February 8, 2016 10:13:00'), 55.6 ),
  new Histogram(6, new Date('February 9, 2016 10:13:00'), 55.9 ),
];
