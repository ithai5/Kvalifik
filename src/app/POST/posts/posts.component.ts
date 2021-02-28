import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {Post} from '../../entities/post';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  posts: Post[];
  displayedColumns: string [] = ['title', 'createdDate', 'likeCount' , 'status', 'edit'];
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.posts = this.dataService.getPosts();
  }
  viewPost(post: Post): void {
  }
  
  editPost(editablePost?: Post): void {
    if (editablePost === undefined) {
      this.router.navigate(['/posts/edit/'], {state: {data: {post: {title: "Your title here...", content: "Your bla bla here..."}}}})
    } else {
        //VERY IMPORTANT LINE, THIS IS THE KEY POINT TO SUCCES, WITHOUT IT THE PROGRAM WOULDN'T WORK AT ALL
        this.router.navigate(['/posts/edit/'], {state: {data: {post: editablePost}}})
      }
    
  }

  createPost(inputId: any): void {
    this.router.navigate(['/posts/edit/', {id: inputId}]);
  }

}
