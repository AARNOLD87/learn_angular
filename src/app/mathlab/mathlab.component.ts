import { Component, OnInit } from '@angular/core';
import * as mjs from 'mathjs';

@Component({
  selector: 'app-mathlab',
  templateUrl: './mathlab.component.html',
  styleUrls: ['./mathlab.component.css']
})
export class MathlabComponent implements OnInit {

  exp: string;
  result: number = 0;

  constructor() { }

  ngOnInit() {
  }

  calculate() {
    // tslint:disable-next-line:no-eval
    this.result = mjs.eval(this.exp);
  }

}
