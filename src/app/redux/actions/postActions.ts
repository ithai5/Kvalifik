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
  static GET_POST_LIST = 'GET_POST_LIST';
  static GET_POST_LIST_FOR_USER = 'GET_POST_LIST_FOR_USER';
  static CLEAR_LIST = 'CLEAR_LIST';

  addPost(post: Post): void {
    this.postService.createPost(post);
    this.ngRedux.dispatch({
      type: PostActions.ADD_POST,
      payload: post,
    });
  }

  updatePost(updatePost: Post): void{
    this.postService.updatePost(updatePost);

    this.ngRedux.dispatch({
      type: PostActions.UPDATE_POST,
      payload: updatePost
    });
  }

  deletePost(deletePost: Post): void{
    this.postService.deletePost(deletePost);

    this.ngRedux.dispatch({
      type: PostActions.DELETE_POST,
      payload: deletePost
    });
  }

  getPostList(): void {
    this.postService.getPostList().subscribe(res => {
      let postList: Post[];

      postList = Object.entries(res).map(([key, value])=>{
        let post = value as Post;
        return {... post, id: key, createdDate: new Date(post.createdDate)}; // converting object into array
      })

      this.ngRedux.dispatch({
        //call to post service
        type: PostActions.GET_POST_LIST,
        payload: postList
      });
    });
  }

  getPostListForUser(): void {
    this.postService.getPostListForUser().subscribe(res => {
      let postList: Post[];

      postList = Object.entries(res).map(([key, value])=>{
        let post = value as Post;
        return {... post, id: key, createdDate: new Date(post.createdDate)}; // converting object into array
      })
      
      this.ngRedux.dispatch({
        //call to post service
        type: PostActions.GET_POST_LIST_FOR_USER,
        payload: postList
      });
    });
  }

  clearList(): void {
    this.ngRedux.dispatch({
      type: PostActions.CLEAR_LIST,
    });
  }
}
