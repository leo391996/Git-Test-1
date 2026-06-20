import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs'
@Injectable({
  providedIn: 'root',
})
export class Post implements OnInit {
    private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}
ngOnInit(){}
  // READ
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // CREATE
  addPost(post: any): Observable<any> {
    return this.http.post(this.apiUrl, post);
  }

  // UPDATE
  updatePost(id: number, post: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, post);
  }

  // DELETE
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
