import { Injectable } from '@angular/core';
import {Post} from '../entities/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../redux/state/appState';
import { environment } from 'src/environments/environment';
import { PostActions } from '../redux/actions/postActions';
import { INITIAL_STATE } from '../redux/reducer/postReducer';

@Injectable({
  providedIn: 'root'
})
export class PostService {
   // need to be implemented better id functionality in the future
  private posts: Post[] = [];
  private httpOptions = {
    headers: new HttpHeaders({'content-Type': 'application.json'})
  }

  constructor(private httpClient: HttpClient, private ngRedux: NgRedux<AppState>, private PostActions: PostActions) {

  }

  /** return all the posts */

  getPosts(): Post[] {
/*
    this.loadPosts();
*/
    return this.posts;
  }

  /** get one post by  id */
  getPostById(id: any): Post{
    return this.posts.find((post) => post.id === id); // find the post by the id
  }
  /** create new post  */
  createPost(newPost: Post): Post{
    newPost.id = this.posts.length + 1;
    this.posts.push(newPost);
    return newPost;
  }
  /** update post by id, get receives id and updated post info and return the update post */
  updatePost(id: any, updateInfo: Post): Post{
    // TODO: need to be implemented by the backend
    const postToUpdate = this.getPostById(id); // find the post by the id
    const keysList = Object.keys(updateInfo); // create a list of the keys that been sent
    keysList.forEach((key) => postToUpdate[key] = updateInfo[key]);
    // add the new keys into the object and update the old one with the new value
    return postToUpdate;
  }
  /** delete post receives id and delete it, it will return the deleted post */
  deletePost(id: any): Post {
    return this.posts.splice(this.posts.indexOf(this.getPostById(id)), 1)[0];
  }
}
