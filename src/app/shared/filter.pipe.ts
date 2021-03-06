import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propNames: string[]) :any {
    if(value.length === 0 || filterString === '' ){
      return value;
    }
    const resultArray = [];

    for (const item of value){
      for(const propName of propNames) {
        if(item[propName].toLowerCase().includes(filterString.toLowerCase())){
          resultArray.push(item);
          break;    
        }
      }
    }
    return resultArray;
  }

}
