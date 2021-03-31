import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/entities/post';
import { Input } from '@angular/core';
import {PostService} from '../../service/post.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {joinTestLogs} from 'protractor/built/util';

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
  post = new FormGroup({
    title : new FormControl('', Validators.required),
    content : new FormControl('', Validators.required),
    picture : new FormControl()

  });

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.editablePost = history.state.data.post;
    this.toCreate = history.state.data.toCreate;

  }

  openDialog(type: string): void {
  }
  onSubmitCreate(): void{
    console.log(this.post.value);
    const post: Post = this.post.value;
    post.createdDate = new Date();
    this.postService.createPost(post);
  }

  onSubmitUpdate(): void{
    console.log(this.post.value);
  }
  getPicture(url: string): void{
    console.log('this is the imgpath: ', url);
    this.postService.uploadPictureToAPI(url);
  }
}
