import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Object[], name: string): any {
    if(!name){
      return value;
    }
    return value.filter(value => value['name'].toUpperCase().includes(name.toUpperCase()));
  }

}
