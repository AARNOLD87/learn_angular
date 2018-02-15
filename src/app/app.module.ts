import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DogListComponent } from './dogs/doglist/doglist.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogComponent } from './dogs/dog/dog.component';
import { DogApiService } from './services/dog-api.service';



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
    HttpModule,
    FormsModule,
  ],
  providers: [DogApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
