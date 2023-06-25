import { Component } from '@angular/core';
import {AppCounterService} from "../services/app-counter.service";
import {LocalServiceService} from "../services/local-service.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  providers: [LocalServiceService]
})
export class CounterComponent {
  constructor(private appCounterService: AppCounterService, private localService: LocalServiceService) {

  }
  getterAppCounter() {
    return this.appCounterService;
  }

  getterLocalCounter() {
    return this.localService;
  }
}
