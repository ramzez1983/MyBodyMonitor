import { Histogram }              from './histogram';

export const WEIGHTS: Histogram[] = [
  new Histogram(new Date('2016-02-04T00:00:00'), 55.1 ),
  new Histogram(new Date('February 5, 2016 10:13:00'), 55.3 ),
  new Histogram(new Date('February 6, 2016 10:13:00'), 55.5 ),
  new Histogram(new Date('February 7, 2016 10:13:00'), 55.6 ),
  new Histogram(new Date('February 8, 2016 10:13:00'), 55.6 ),
  new Histogram(new Date('February 9, 2016 10:13:00'), 55.9 ),
];
