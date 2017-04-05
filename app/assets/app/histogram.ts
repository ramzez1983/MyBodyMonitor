export class Histogram {
  public dateLabel: String;
  public constructor(public id: number,
                     public date: Date,
                     public value: number) {
    this.dateLabel = this.date.toLocaleDateString('pl');
  }
}
