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
  constructor(private postService: PostService, private router: Router,
              private ngRedux: NgRedux<AppState>, private postActions: PostActions) { }

  ngOnInit(): void {
    // this.setPostsLists(this.postService.getPosts());
    this.ngRedux.select(state => state.posts).subscribe(response => {
      console.log('hello');
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
  deletePost(postId: any): Post{
    const deletedPost = this.postService.deletePost(postId);
    // this.setPostsLists(this.postService.getPosts());
    this.router.navigate(['/posts/']);
    return deletedPost;
  }

  createPost(): void { this.router.navigate(['/posts/edit/'], {state: {data: {post: {title: 'Your title here...', content: 'Your bla bla here...'}, toCreate: true}}});
  }

}
