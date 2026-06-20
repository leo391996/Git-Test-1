import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTestcss]',
})
export class Testcss {

  constructor(public  el: ElementRef) {
   this.el.nativeElement.style.backgroundColor='red'
   
   }

}
