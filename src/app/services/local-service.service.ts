import { Injectable } from '@angular/core';

@Injectable()
export class LocalServiceService {
  constructor() { }
  counter = 0;
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}
