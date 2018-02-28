import { Component, OnInit, Input } from '@angular/core';
import { City } from './city.model';
import { GeocodeService } from '../services/geocode.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {

  city: City = {} as City;
  search: string;

  constructor(private geocode: GeocodeService) { }

  clicca() {
    this.geocode.getLatLng(this.search).subscribe(
      data => this.city = data,
      err => console.log('get error', err)
    );
  }

  ngOnInit() {
  }

}
