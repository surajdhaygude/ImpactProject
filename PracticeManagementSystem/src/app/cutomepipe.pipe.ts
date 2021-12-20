import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName'
})
export class CutomepipePipe implements PipeTransform {

  // transform(value: any,args?: any): any {
  //   if(!value) return null;
  //   if(!args) return value;

  //   // args=args.toLowerCase();
  //   // return value.filter(function(item: any){
  //   //   return JSON.stringify(item)
  //   //       .toLowerCase()
  //   //       .includes(args);
  //   // });

    
  // }

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val: { Name: string; Status: string; }) => {
      let rVal = (val.Name.toLocaleLowerCase().includes(args)) || (val.Status.toLocaleLowerCase().includes(args));
      return rVal;
    })

}

}
