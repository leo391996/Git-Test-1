import { Component } from '@angular/core';
import { ActivatedRoute, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-child',
  standalone:true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  public name:any;
  constructor(public route:ActivatedRoute){}
ngOnInit(){
   this.name = this.route.snapshot.paramMap.get('name')!;
   console.log(this.name)
}
}
