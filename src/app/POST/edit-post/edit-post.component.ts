import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/entities/post';
import { Input } from '@angular/core';
import {PostService} from '../../service/post.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  editablePost: any;
  toCreate: boolean;
  /*
    post = new FormGroup({
    title: new FormControl(''),
    content: new FormControl('');
  });
  */

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.editablePost = history.state.data.post;
    this.toCreate = history.state.data.toCreate;

  }

  openDialog(type: string): void {
    console.log(type);
  }
  savePost(post: Post): void{
    this.postService.createPost(post);
  }
}
