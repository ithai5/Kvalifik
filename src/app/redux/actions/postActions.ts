import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../state/appState';
import { Post } from 'src/app/entities/post';

@Injectable({ providedIn: 'root'})
export class PostActions {
  constructor(private ngRedux: NgRedux<AppState>) {}
  static ADD_POST = 'ADD_POST';
  static UPDATE_POST = 'UPDATE_POST';
  static DELETE_POST = 'DELETE_POST';
  addPost(post: Post): void {
    this.ngRedux.dispatch({
      type: PostActions.ADD_POST,
      payload: post,
    });
  }
  updatePost(updatePost: Post): void{
    this.ngRedux.dispatch({
      type: PostActions.UPDATE_POST,
      payload: updatePost
    });
  }
  deletePost(deletePost: Post): void{
    this.ngRedux.dispatch({
      type: PostActions.DELETE_POST,
      payload: deletePost
    });
  }
}
