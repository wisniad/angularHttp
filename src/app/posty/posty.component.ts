import { IPost } from './ipost';
import { RestServisService } from './../rest-servis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posty',
  templateUrl: './posty.component.html',
  styleUrls: ['./posty.component.css']
})
export class PostyComponent implements OnInit {
  posts: IPost[];

  constructor(private restServis: RestServisService) { }

  ngOnInit() {
    this.restServis.getPosts().subscribe(postsFromServer => {
      this.posts = postsFromServer;
    });
  }

  getPostById(postId: number) {
    this.restServis.getPostById(postId).subscribe(
      postFomServer => {
        console.log(postFomServer);
      }
    );
  }
  getPostByUserId(postId: number) {
    this.restServis.getPostByUserId(postId).subscribe(
      postFomServer => {
        console.log(postFomServer);
      }
    );
  }

  deletePost(postId: number) {
    this.restServis.deletePostById(postId).subscribe(
      postFomServer => {
        console.log(postFomServer);
      }
    );
  }

  addPost() {
    const newPost: IPost = ({
      id: null,
      userId: 1,
      title: 'kurs angular',
      body: 'jakies body do msg 1'
    });
    this.restServis.addPost( newPost ).subscribe(newPostFromServer => console.log(newPostFromServer));
  }

  updatePost() {
    const newPost: IPost = ({
      id: 101,
      userId: 5,
      title: 'Kurs angular 5.0',
      body: 'Nowa wiadomosc'
    });
    this.restServis.updatePost( newPost ).subscribe(newPostFromServer => console.log(newPostFromServer));
  }

  patchPost() {
    const newPost: IPost = ({
      id: 101,
      title: 'Kurs angular 5.0',
      body: 'Nowa wiadomosc'
    });

    this.restServis.patchPost( newPost ).subscribe(newPostFromServer => console.log(newPostFromServer));
  }
}
