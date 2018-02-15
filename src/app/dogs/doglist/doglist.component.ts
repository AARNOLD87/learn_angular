import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Dog } from '../dog.model';

@Component({
  selector: 'app-doglist',
  templateUrl: 'doglist.component.html'
})

export class DogListComponent {

  @Input() dogs: Dog[];

  @Output() editEvent: EventEmitter<Dog> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<Dog> = new EventEmitter();

  constructor() { }

  edit(selected: Dog) {
    this.editEvent.emit(selected);
  }

  delete(event: Dog) {
    this.deleteEvent.emit(event);
  }
}
