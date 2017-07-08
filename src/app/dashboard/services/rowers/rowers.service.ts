import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RowersService {
  private rowerUrl = 'api/rowers';
  private headers = new Headers({
    'Content-type': 'application/json'
  });
  constructor(
    private http: Http
  ) { }

  getRowers(): Promise<Rower[]> {
    return this.http.get(this.rowerUrl)
      .toPromise()
      .then(response => response.json().data as Rower[])
      .catch(this.handleError);
  }

  getRower(id: number): Promise<Rower> {
    return this.http.get(`${this.rowerUrl}/${id}`)
      .toPromise()
      .then(response =>
        response.json().data as Rower)
      .catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    console.log('Error occurred, ', error);
    return Promise.reject(error.message || error);
  }

}

export class Rower {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  weight: number;
  side: string
}
