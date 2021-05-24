import { Injectable } from '@angular/core';
import { Post } from '../entities/post';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../redux/state/appState';

@Injectable({
  providedIn: 'root'
})

export class PostService extends ApiService{

  constructor(private httpClient: HttpClient, private ngRedux: NgRedux<AppState>) {
    super();
  }

  //Creates a new post
  createPost(post: Post): void{
    this.httpClient.post(this.dbAccess("Posts", this.ngRedux.getState().userState.userToken), post, this.getHttpHeader()).subscribe();
  }

  //load post from Firebase
  getPostList(): any {
    return this.httpClient.get(this.dbAccess("Posts",this.ngRedux.getState().userState.userToken), this.getHttpHeader());
  }

  updatePost(post: Post): void {

    this.httpClient.patch(this.dbAccess(`Posts/${post.id}`, this.ngRedux.getState().userState.userToken), post, this.getHttpHeader()).subscribe();
  }

  deletePost(post: Post): void {

    //This method requires the .subscribe() part, otherwise the database doesn't change
    this.httpClient.delete(this.dbAccess(`Posts/${post.id}/`, this.ngRedux.getState().userState.userToken), this.getHttpHeader()).subscribe();
  }

  getPostListForUser(): any {
    //Itai: "This so ugly! ;_;7"
    const parameters: string = this.ngRedux.getState().userState.userToken + "&orderBy=\"author\"" +
    "&equalTo=\"" + this.ngRedux.getState().userState.userInfo + "\"";
    
    return this.httpClient.get(this.dbAccess("Posts", parameters), this.getHttpHeader());
  }
}
