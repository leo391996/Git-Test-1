import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
  pure:false
})
export class TestPipe implements PipeTransform { 

  transform(value:any):any{
  return value * 3;
  }

  //   transform(value:any):any{
  //  return new Date();
  //  }

}
