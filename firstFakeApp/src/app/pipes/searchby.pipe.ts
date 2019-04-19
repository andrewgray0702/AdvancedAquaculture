import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchby'
})
export class SearchbyPipe implements PipeTransform {

  transform(value: Object[], type: string): any {
    if(type == "fish"){
      return value.filter(value => value['type'].includes("fish"));
    } else if(type == "coral"){
      return value.filter(value => value['type'].inclues("coral"))
    }
  }

}
