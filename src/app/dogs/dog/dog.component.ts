import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dog } from '../dog.model';
import { DogApiService } from '../../services/dog-api.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dog',
  templateUrl: 'dog.component.html'
})

export class DogComponent implements OnInit {

  _dog: Dog;
  breeds = [];
  image: string;
  breed;

  @Input()
  dog: Dog;

  @Output() saveEvent: EventEmitter<Dog> = new EventEmitter();
  @Output() cancelEvent: EventEmitter<any> = new EventEmitter();

  constructor(private _dogsapi: DogApiService) { }

  save() {
    this.saveEvent.emit(this._dog);
  }

  cancel() {
    this.cancelEvent.emit();
  }

  breedChanged() {
    this._dogsapi.getBreedPhoto(this.breed).subscribe(
      data => this.image = data,
      err => console.log('get error', err)
    );
  }

  ngOnInit() {
    this._dog = JSON.parse(JSON.stringify(this.dog));
    this._dogsapi.getBreeds().subscribe(
      data => this.breeds = data,
      err => console.log('get error', err),
      () => {
        this.breed = this.breeds[0];
        this.breedChanged();
      }
    );

  }
}
