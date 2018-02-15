import { Component, OnInit } from '@angular/core';
import { Dog } from './dog.model';
import { DogComponent } from './dog/dog.component';

@Component({
  selector: 'app-dogs',
  templateUrl: 'dogs.component.html'
})

export class DogsComponent {

  private cipCounter: number;

  dogs: Dog[];
  selectedDog: Dog;
  showDog = false;

  constructor() {
    this.loadDog();
  }

  create() {
    this.showDog = true;
    this.selectedDog = new Dog();
    this.selectedDog.cipCode = this.cipCounter + 1;
  }

  onSave($event) {
    let index = this.dogs.findIndex(i => i.cipCode === $event.cipCode );
    if ( index === -1 ) {
      this.dogs.push($event);
      this.cipCounter++;
    } else {
      this.dogs[index] = $event;
    }

    this.showDog = false;
  }

  onCancel() {
    this.showDog = false;
  }

  onDelete($event) {
    this.dogs.splice(this.dogs.indexOf($event), 1);
  }

  onEdit($event) {
    this.showDog = true;
    this.selectedDog = $event;
  }

  loadDog() {
    this.dogs = [
        { name : 'Raul', age : 3, cipCode : 1 },
        { name : 'Zara', age : 2, cipCode : 2 },
        { name : 'Doic', age : 5, cipCode : 3 },
        { name : 'Fido', age : 2, cipCode : 4 }
    ];

    this.cipCounter = 4;
  }
}
