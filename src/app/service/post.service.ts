import { Injectable } from '@angular/core';
import { Post } from '../entities/post';
import { PostActions } from '../redux/actions/postActions';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';
import {environment} from '../../environments/environment';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../redux/state/appState';

@Injectable({
  providedIn: 'root'
})
export class PostService extends ApiService{

  constructor(private authService: AuthService, private httpClient: HttpClient, private ngRedux: NgRedux<AppState>) {
    super();
  }

  //Creates a new post
  createPost(post: Post): void{
    this.httpClient.post(this.dbAccess("Posts", this.ngRedux.getState().user.userToken), post, this.getHttpHeader())
      .subscribe(res => console.log(res))
  }

  //load post from Firebase
  getPostList(): any{
    const posts = [];
    this.httpClient.get(this.dbAccess("Posts",this.ngRedux.getState().user.userToken), this.getHttpHeader())
      .subscribe(res=>{
        console.log("this is from getPostList in postService: ", res);
        return res
    })

/*
    Object.entries(response.postList).map(([key, value])=>{
      return value; // converting object into array
    })
*/
  }

}
