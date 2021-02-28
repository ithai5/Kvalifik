import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Post} from '../entities/post';
import {DataService} from '../data.service';

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
  editPost(inputId: any): void {
  }
  createPost(inputId: any): void {
    this.router.navigate(['edit', {id: inputId}]);
  }

}
