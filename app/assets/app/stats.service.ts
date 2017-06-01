import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { BodyStats } from './bodyStats';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StatsService {

  private delayMs = 500;
  private headers = new Headers({'Content-Type': 'application/json'});
  private statsUrl = 'api/stats';

  constructor(private http: Http) { }

  public getBodyStats(): Promise<BodyStats[]> {
    return this.http.get(this.statsUrl)
                     .toPromise()
                     .then(response => (response.json().stats as BodyStats[]).map(s => new BodyStats(s)))
                     .catch(this.handleError);
  }

  public getDetailedStats(id: string): Promise<BodyStats> {
    const url = `${this.statsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => new BodyStats(response.json() as BodyStats[]))
      .catch(this.handleError);
  }

  public createBodyStats(bodyStats: BodyStats): Promise<BodyStats> {
    return this.http
      .post(this.statsUrl, JSON.stringify(bodyStats), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  // Fake server update; assume nothing can go wrong
  public updateBodyStats(body: BodyStats): Promise<BodyStats>  {
    const id = body._id.$oid;
    const url = `${this.statsUrl}/${id}`;
    console.error('UpdateBodyStats id: %s, url: %s', id, url);
    return this.http
      .put(url, JSON.stringify(body), {headers: this.headers})
                .toPromise()
                .then(() => body)
                .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
