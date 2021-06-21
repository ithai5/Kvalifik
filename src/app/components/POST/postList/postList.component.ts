import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../../entities/post';
import { AppState } from '../../../redux/state/appState';
import { NgRedux } from '@angular-redux/store';
import { PostActions } from '../../../redux/actions/postActions';

@Component({
  selector: 'app-postList',
  templateUrl: './postList.component.html',
  styleUrls: ['./postList.component.css']
})
export class PostListComponent implements OnInit {
  //Disable func if not logged in
  isLoggedIn: boolean = false;
  postList: Post[];
  displayedColumns: string [] = ['title', 'createdDate', 'likeCount' , 'status', 'edit'];
  public search: string = '';

  constructor(private router: Router,
              private ngRedux: NgRedux<AppState>,
              private postActions: PostActions) {
              }

  ngOnInit(): void {
    // need to make a call to the backend to get all posts
    //this.postActions.getPostListForUser();
    this.postActions.getPostList();
    this.postList = this.ngRedux.getState().postState.postList.filter((post) => post.author === this.ngRedux.getState().userState.userInfo);
    if (this.ngRedux.getState().userState.userInfo !== null) {
      this.isLoggedIn = true;
    }
  }

  viewPost(viewedPost: Post): void {
    this.router.navigate(['/postList/viewPost'], {state: {data: {post: viewedPost}}});
  }
  editPost(editablePost: Post): void {
      // VERY IMPORTANT LINE, THIS IS THE KEY POINT TO SUCCES, WITHOUT IT THE PROGRAM WOULDN'T WORK AT ALL
    this.router.navigate(['/postList/edit/'], {state: {data: {post: editablePost, toCreate: false}}});
  }

  deletePost(post: Post): void{
    this.postActions.deletePost(post);
    this.postList = this.ngRedux.getState().postState.postList.filter((post) => post.author === this.ngRedux.getState().userState.userInfo);
  }

  createPost(): void { this.router.navigate(['/postList/edit/'], {state: {data: {post: {title: '', content: ''}, toCreate: true}}});
  }

}
