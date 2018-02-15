import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dog } from '../dog.model';

@Component({
  selector: 'app-dog',
  templateUrl: 'dog.component.html'
})

export class DogComponent implements OnInit {

  _dog: Dog;

  @Input()
  dog: Dog;

  @Output() saveEvent: EventEmitter<Dog> = new EventEmitter();
  @Output() cancelEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  save() {
    this.saveEvent.emit(this._dog);
  }

  cancel() {
    this.cancelEvent.emit();
  }

  ngOnInit() {
    this._dog = JSON.parse(JSON.stringify(this.dog));
  }
}
