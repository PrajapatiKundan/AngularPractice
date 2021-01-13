import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrap'
})
export class WrapPipe implements PipeTransform {

  transform(value: string): string {
    if( value.length > 10){
      return value.slice(0, 5) + "...";
    }
    return value;
  }

}
