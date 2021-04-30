import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {Post} from '../../entities/post';
import {PostService} from '../../service/post.service';
import {AppState} from '../../redux/state/appState';
import {NgRedux} from '@angular-redux/store';
import {PostActions} from '../../redux/actions/postActions';
import {log} from 'util';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  displayedColumns: string [] = ['title', 'createdDate', 'likeCount' , 'status', 'edit'];
  public search: string = '';

  constructor(private postService: PostService, private router: Router,
              private ngRedux: NgRedux<AppState>, private postActions: PostActions) {
                console.log("Posts constructor");
              }

  ngOnInit(): void {
    // OLD OLD implementation: this.setPostsLists(this.postService.getPosts());
    this.postService.loadPosts();
    this.ngRedux.select(state => state.posts).subscribe(response => {
      this.posts = response.posts;
    });
  }
  
  timeForTable(date: Date): string {
    return date.getDate() + '/' + date.getMonth() + 1 + '/' + date.getFullYear();
  }
  viewPost(viewedPost: Post): void {
    this.router.navigate(['/posts/:id'], {state: {data: {post: viewedPost}}});
  }
  editPost(editablePost: Post): void {
      // VERY IMPORTANT LINE, THIS IS THE KEY POINT TO SUCCES, WITHOUT IT THE PROGRAM WOULDN'T WORK AT ALL
        this.router.navigate(['/posts/edit/'], {state: {data: {post: editablePost, toCreate: false}}});
  }
  deletePost(post: Post): void{
    this.postActions.deletePost(post);
  }

  createPost(): void { this.router.navigate(['/posts/edit/'], {state: {data: {post: {title: 'Your title here...', content: 'Your bla bla here...'}, toCreate: true}}});
  }

}
