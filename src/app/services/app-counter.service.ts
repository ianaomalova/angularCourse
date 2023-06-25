import {Injectable} from "@angular/core";
import {LogService} from "./log.service";

@Injectable({
  providedIn: 'root'
})
export class AppCounterService {
  constructor(private logService: LogService) {

  }
  counter = 0;
  increment() {
    this.logService.log('increment counter...')
    this.counter++;
  }
  decrement() {
    this.logService.log('decrement counter...')
    this.counter--;
  }
}
