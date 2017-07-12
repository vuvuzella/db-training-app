import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AbstractControl } from '@angular/forms';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';

// Angular Firebase
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class RowersService {
  private rowerUrl = '/rowers';
  private headers = new Headers({
    'Content-type': 'application/json'
  });
  constructor(
    private http: Http,
    private  db: AngularFireDatabase
  ) { }

  // GET
  getRowers(): Promise<Rower[]> {
    // return this.http.get(this.rowerUrl)
    //   .toPromise()
    //   .then(response => response.json().data as Rower[])
    //   .catch(this.handleError);
    return this.db.list(this.rowerUrl)
      .map(rowers => rowers)
      .first()
      .toPromise()
      .then(response => response as Rower[])
      .catch(this.handleError)
  }

  getRower(id: string): Promise<Rower> {
    // return this.http.get(`${this.rowerUrl}/${id}`)
    //   .toPromise()
    //   .then(response =>
    //     response.json().data as Rower)
    //   .catch(this.handleError);
    console.log(id);
    return this.db.object(this.rowerUrl + '/' + id)
      .map(rower => rower)
      .first()
      .toPromise()
      .then(response => response as Rower)
      .catch(this.handleError)
  }

// POST
  addRower(newRower: Rower) {
    // return this.http.post(this.rowerUrl, {
    //   firstName: newRower.firstName,
    //   lastName: newRower.lastName,
    //   age: newRower.age,
    //   weight: newRower.weight,
    //   side: newRower.side
    // }, {headers: this.headers})
    //   .toPromise()
    //   .then(response => response.json().data as Rower)
    //   .catch(this.handleError)
    return this.db.list(this.rowerUrl)
      .push(newRower)
      .then(response => console.log(response))
      .catch(this.handleError)
  }

  // DELETE
  deleteRower(rowerId: string) {
    // return this.http.delete(`${this.rowerUrl}/${rowerId}`)
    //   .toPromise()
    //   .then(response => response)
    //   .catch(this.handleError)
    return this.db.object(this.rowerUrl + '/' + rowerId)
      .remove()
      .then(() => rowerId)
      .catch(this.handleError)
  }

  // PUT
  updateRower(rower: Rower, rowerId: string) {
    // console.log(`${this.rowerUrl}/${rower.id}`)
    // return this.http.put('api/rowers/' + 3,
    // JSON.stringify({
    //   firstName: rower.firstName,
    //   lastName: rower.lastName,
    //   age: rower.age,
    //   weight: rower.weight,
    //   side: rower.side
    // }), {headers: this.headers})
    //   .toPromise()
    //   .then(response => rower)
    //   .catch(this.handleError)
    const updateRower = {};
    updateRower[rowerId] = rower;
    return this.db.object(this.rowerUrl)
      .update(updateRower)
      .then(() => rower)
      .catch(this.handleError)
  }

  handleError(error: any): Promise<any> {
    console.log('Error occurred, ', error);
    return Promise.reject(error.message || error || 'hello');
  }

}

export class Rower {
  firstName: string;
  lastName: string;
  age: number;
  weight: number;
  side: string;

  constructor(firstName: string, lastName: string, age: number, weight: number, side: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.weight = weight;
    this.side = side;
  }

}
