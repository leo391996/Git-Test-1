import { Component, Input, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Post } from './post';
import { TestPipe } from './test-pipe';
import { Testcss } from './testcss';
import { Parent } from "./parent/parent";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, TestPipe, Testcss,RouterLink ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  // ✅ signal (optional)
  title = signal('Angular 21.0.3');
  employee:any = [{
    name:'hhfhe',
    age:35,
    gender:'male'
  }];
  category:any;
 data:any;
 model:any;
  posts: any[] = [];
  newPost = { title: '', body: '' };
  editingPost: any = null;
  showbutton:any;
  data1!:{name:string,id:number};
  public pipevalue:any =10;
 public empdata:any=['leo','praveen']

  public value:number = 10;





   public data2:any;
  public user:Array<{name:string; age:number;}>=
  [
    {
    name:'leo', age:22
  },
      {
    name:'raje', age:33
  },

];

public namelist:Array<{name:any,age:any}>=[
  {name:'leo','age':26},
  {name:'dinesh','age':27},                    

]
 @Input() ckk:any;
  constructor(private postService: Post,public router:Router) {
    console.log('constructor');
  }

  // 🔹 Lifecycle hooks
  ngOnInit(): void {
    console.log('ngOnInit');
   this.data = this.employee.map((emp:any)=>{
    return{
       name:emp.name
     
    }
     
      
    })
     console.log(this.data)
     this.data = { ...this.user,
              name :'peter'
  }
  console.log(this.user);
  console.log(this.data.name)
    this.loadPosts();
    this.normalFunction();
    this.callArrow();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  // 🔹 CRUD METHODS
  loadPosts() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data.slice(0, 5);
    });
  }

  addPost() {
    this.postService.addPost(this.newPost).subscribe(res => {
      this.posts.unshift(res);
      this.newPost = { title: '', body: '' };
    });
  }

  editPost(post: any) {
    this.editingPost = { ...post };
  }

  updatePost() {
    this.postService.updatePost(this.editingPost.id, this.editingPost)
      .subscribe(() => {
        const index = this.posts.findIndex(p => p.id === this.editingPost.id);
        this.posts[index] = this.editingPost;
        this.editingPost = null;
      });
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe(() => {
      this.posts = this.posts.filter(p => p.id !== id);
    });
  }
  show(value:any){
  this.showbutton = value;
  }

   

  normalFunction() {
setTimeout( ()=>{
      console.log(this.value)
  },2000)


}

  public arrow = () => {
    console.log(this.value); // 10
  };

  callArrow() {
    this.arrow();
  }
  gotochild(){
    this.router.navigateByUrl('/child/leo');
  
    }

    catogeryselect(data:any){
     this.category = data.target.value
    }
  }