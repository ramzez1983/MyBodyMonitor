export class BodyStats {
// tslint:disable-next-line:variable-name
  public _id: number;
  public date: Date;
  // TODO przerobic na mape charakterystyk?
  public weight: number;
  public fatPercent: number;
  public waterPercent: number;
  public musclePercent: number;
  public bonesPercent: number;
  public calories: number;
  [key: string]: any;

  public constructor(obj: any) {
    this._id = obj._id;
    this.date = new Date(obj.date);
    this.weight = obj.weight;
    this.fatPercent = obj.fatPercent;
    this.waterPercent = obj.waterPercent;
    this.musclePercent = obj.musclePercent;
    this.bonesPercent = obj.bonesPercent;
    this.calories = obj.calories;
  }

  public getDataForSeries(series: string[]): any[] {
    return series.map((s: string) => this[s]);
  }
}
