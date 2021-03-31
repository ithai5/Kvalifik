import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../state/appState';
import { Post } from 'src/app/entities/post';

@Injectable({ providedIn: 'root'})
export class PostActions {
  constructor (private ngRedux: NgRedux<AppState>) {} 
  
  static APPEND_POST: string = 'APPEND_POST'; 
  
  setPosts(post: Post): void {
    this.ngRedux.dispatch({
      type: PostActions.APPEND_POST,
      payload: post,
    });
  }
}
