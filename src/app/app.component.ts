import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  e = Math.E;
  str = 'hello world'
  date = new Date();
  float = 0.42;

  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 4,
        f: 5
      }
    }
  }
}
