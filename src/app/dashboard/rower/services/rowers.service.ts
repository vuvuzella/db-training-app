import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AbstractControl } from '@angular/forms';

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

  // GET
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

// POST
  addRower(newRower: Rower) {
    return this.http.post(this.rowerUrl, {
      firstName: newRower.firstName,
      lastName: newRower.lastName,
      age: newRower.age,
      weight: newRower.weight,
      side: newRower.side
    })
      .toPromise()
      .then(response => response.json().data as Rower)
      .catch(this.handleError)
  }

  // DELETE
  deleteRower(rowerId: number) {
    return this.http.delete(`${this.rowerUrl}/${rowerId}`)
      .toPromise()
      .then(response => response)
      .catch(this.handleError)
  }

  // PUT
  updateRower(rower: Rower) {
    return this.http.put(`${this.rowerUrl}/${rower.id}`, {
      firstName: rower.firstName,
      lastName: rower.lastName,
      age: rower.age,
      weight: rower.weight,
      side: rower.side
    })
      .toPromise()
      .then(response => response.json().data as Rower)
      .catch(this.handleError)
  }

  handleError(error: any): Promise<any> {
    console.log('Error occurred, ', error);
    return Promise.reject(error.message || error || 'hello');
  }

}

export class Rower {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  weight: number;
  side: string

  constructor(firstName: string, lastName: string, age: number, weight: number, side: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.weight = weight;
    this.side = side;
  }

}
