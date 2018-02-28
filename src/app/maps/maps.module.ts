import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps/maps.component';
import { FormsModule } from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import { HttpModule } from '@angular/http';
import { GeocodeService } from './services/geocode.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  declarations: [MapsComponent],
  providers: [GeocodeService]
})
export class MapsModule { }
