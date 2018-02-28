import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { City } from '../maps/city.model';
import 'rxjs/add/operator/map';

@Injectable()
export class GeocodeService {

  constructor(private http: Http) { }

  private extractData(res: Response): City {
    const body = res.json();
    const city: City = {} as City;

    for(let i in body) {

      if(i === 'longt') {
        city.long = Number(body[i]);
      }
      if(i === 'latt') {
        city.lat = Number(body[i]);
      }
    }

    return city;
  }

  getLatLng(city: string) {
    return this.http.get('https://geocode.xyz/' + city + '?json=1')
    .map(this.extractData);
  }

}
