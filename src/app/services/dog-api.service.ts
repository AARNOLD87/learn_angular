import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DogApiService {

  constructor(private http: Http) { }

  private extractData(res: Response) {
    const body = res.json();
    const breeds = [];

    for (let item in body.message) {
      breeds.push(item);
    }

    return breeds;
  }

  private extractPhoto(res: Response): string {
    const body = res.json();
    return body.message;
  }

  getBreeds() {
    return this.http.get(`https://dog.ceo/api/breeds/list/all`)
    .map(this.extractData);
  }

  getBreedPhoto(breed: string) {
    return this.http.get(`https://dog.ceo/api/breed/` + breed + `/images/random`)
    .map(this.extractPhoto);
  }

}
