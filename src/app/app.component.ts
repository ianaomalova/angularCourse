import { Component } from '@angular/core';
import {AppCounterService} from "./services/app-counter.service";
import {LocalServiceService} from "./services/local-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalServiceService]
})
export class AppComponent {
  constructor(private appCounterService: AppCounterService, private localService: LocalServiceService) {

  }
  getterAppCounter() {
    return this.appCounterService;
  }

  getterLocalCounter() {
    return this.localService;
  }

}
