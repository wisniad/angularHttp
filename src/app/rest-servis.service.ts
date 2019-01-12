import { IPost } from './posty/ipost';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestServisService {

  private hostUrl = 'http://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Array<IPost>> {
    return this.http.get<Array<IPost>>(this.hostUrl + '/posts');
  }

  getPostById(postId: number): Observable<IPost> {
    return this.http.get<IPost>(this.hostUrl + '/posts/' + postId);
  }
  getPostByUserId(userId: number): Observable<IPost> {
    return this.http.get<IPost>(this.hostUrl + '/posts?userId=' + userId);
  }

  addPost(newPost: IPost) {
    return this.http.post('http://cors-anywhere.herokuapp.com/' + this.hostUrl + '/posts', newPost);
  }

  updatePost(newPost: IPost) { // nie dziala
    return this.http.put('http://cors-anywhere.herokuapp.com/' + this.hostUrl + '/posts/' + newPost.id, newPost);
  }

  patchPost(newPost: IPost) { // nie dziala
    return this.http.patch('http://cors-anywhere.herokuapp.com/' + this.hostUrl + '/posts/' + 101, newPost);
  }

  deletePostById(postId: number): Observable<IPost> {
    return this.http.delete<IPost>('http://cors-anywhere.herokuapp.com/' + this.hostUrl + '/posts/' + postId);
  }
}
