export class Histogram {
  public dateLabel: String;
  public constructor(public date: Date,
                     public value: number) {
    this.dateLabel = this.date.toLocaleDateString('pl');
  }
}
