import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathlabComponent } from './mathlab.component';
import { FormsModule } from '@angular/forms';
import * as mjs from 'mathjs';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [MathlabComponent]
})
export class MathlabModule { }
