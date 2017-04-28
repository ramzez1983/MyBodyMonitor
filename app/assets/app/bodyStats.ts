export class BodyStats {
  public id: number;
  public date: Date;
  // TODO przerobic na mape charakterystyk?
  public weight: number;
  public fatPercent: number;
  public waterPercent: number;
  public musclePercent: number;
  public bonesPercent: number;
  public calories: number;
  [key: string]: any;

  public constructor( id: number,
                      date: Date,
                      weight: number,
                      fatPercent: number,
                      waterPercent: number,
                      musclePercent: number,
                      bonesPercent: number,
                      calories: number) {
    this.id = id;
    this.date = date;
    this.weight = weight;
    this.fatPercent = fatPercent;
    this.waterPercent = waterPercent;
    this.musclePercent = musclePercent;
    this.bonesPercent = bonesPercent;
    this.calories = calories;
  }

  public getDataForSeries(series: string[]): any[] {
    return series.map((s: string) => this[s]);
  }
}
