import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchby'
})
export class SearchbyPipe implements PipeTransform {

  transform(value: Object[], type: string): any {
    if(type == "all"){
      return value;
    }
      return value.filter(value => value['type'] == type);
  }

}
