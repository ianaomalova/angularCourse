import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exMult'
})
export class ExMultPipe implements PipeTransform {

  transform(str: string): string {
    return `${str.trim()}!!!`;
  }

}
