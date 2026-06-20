import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-parent',
  standalone:true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  public data:any;
  public user:Array<{name:string; age:number;}>=
  [
    {
    name:'leo', age:22
  },
      {
    name:'raje', age:33
  },

];
data1:any;
data2:any; 
data3:number =5;
ngOnInit(){

  this.data = { ...this.user,
              name :'peter'
  }
  console.log(this.user);
  console.log(this.data)


  this.data1 = this.user.map((data:any)=>{
                 return   data.name
  })
  console.log( this.data1)

  
  this.data2 = this.user.filter(data => data.name === 'leo')
      

  console.log( this.data1)
   console.log(this.data2)

 this.method1();
 this.method2();

}
   method1(){
    console.log('1',this.data3)
setTimeout(this.method1, 1000);

    
   }
      method2 = () => {
    console.log('3',this.data3)
setTimeout(this.method2, 1000);
    
   }
}
