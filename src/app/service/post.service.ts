import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import {Post} from '../entities/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
   // need to be implemented better id functionality in the future
  private posts: Post[] = [];
  private httpOptions = {
    headers: new HttpHeaders({'content-Type': 'application.json'})
  }

  constructor(dataService: DataService, private httpClient: HttpClient) {
    this.posts = dataService.getPosts();
  }

  /** return all the posts */
  getPosts(): Post[]{
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
  deletePost(id: any): Post{
    return this.posts.splice(this.posts.indexOf(this.getPostById(id)), 1)[0];
  }

  // TODO: Can potentially be moved to some other place at some other time :) 
  uploadPictureToAPI(imgPath: string): any{
    const apiURL: string = 'https://api.imgbb.com/1/upload?key=73a7cdce0b5d789489867d977f6bcb7a&image=' + imgPath;
    console.log('boop!')
    console.log(this.httpClient.post<any>(apiURL, imgPath, this.httpOptions).subscribe());
  }
}
