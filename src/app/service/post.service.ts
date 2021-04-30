import { Injectable } from '@angular/core';
import { Post } from '../entities/post';
import { PostActions } from '../redux/actions/postActions';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService extends ApiService{

  constructor(private postActions: PostActions, private authService: AuthService, private httpClient: HttpClient) {
    super();
  }

  //Creates a new post
  createPost(post: Post): void{
    this.postActions.addPost(post);
    this.httpClient.post(environment.dbAccess("Posts", this.authService.getIdToken()), post, this.getHttpHeader()).subscribe(res => console.log(res))
  }

}
