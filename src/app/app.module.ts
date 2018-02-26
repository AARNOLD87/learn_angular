import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DogListComponent } from './dogs/doglist/doglist.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogComponent } from './dogs/dog/dog.component';
import { DogApiService } from './services/dog-api.service';
import { PageNotFoundComponent } from './page_not_found/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DogListComponent,
    DogsComponent,
    DogComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path : '', component: DogsComponent },
      { path : 'dogs', component: DogsComponent },
      { path : '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [DogApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
