import { Injectable } from '@angular/core';
import { Post } from '../entities/post';
import { PostActions } from '../redux/actions/postActions';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private postActions: PostActions) { }

  //Creates a new post
  createPost(post: Post): void{
    this.postActions.addPost(post);
    
  }

}
