import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../state/appState';
import { Post } from 'src/app/entities/post';
import {PostService} from '../../service/post.service';

@Injectable({ providedIn: 'root'})
export class PostActions {

  constructor(private ngRedux: NgRedux<AppState>, private postService: PostService) {}

  static ADD_POST = 'ADD_POST';
  static UPDATE_POST = 'UPDATE_POST';
  static DELETE_POST = 'DELETE_POST';
  static GET_POSTS = 'GET_POSTS';

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

  getPostList(): void {
    this.postService.getPostList().subscribe(results => {
      console.log("this is from the post action: ", results);
    })
/*    this.ngRedux.dispatch({
      //call to post service
      this.postService.getPost()
      type: PostActions.GET_POSTS,
      payload: postList
    })*/
  }
}
