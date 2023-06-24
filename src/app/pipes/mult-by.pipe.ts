import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'mult'
})
export class MultByPipe implements PipeTransform{
  transform(num: number, num2: number = 2): number {
    return num * num2;
  }
  // transform(value: any, ...args: any[]): any {
  //
  // }

}
