export class BodyStats {
  public id: number;
  public date: Date;
  public weight: number;
  public fatPercent: number;
  public waterPercent: number;
  public musclePercent: number;
  public bonesPercent: number;
  public calories: number;
  [key: string]: number|Date;

  public getSeries(series: string[]): any[] {
    return series.map((s: string) => this[s]);
  }
}
