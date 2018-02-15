import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DogListComponent } from './dogs/doglist/doglist.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogComponent } from './dogs/dog/dog.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DogListComponent,
    DogsComponent,
    DogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
