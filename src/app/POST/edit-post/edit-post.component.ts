import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/entities/post';
import { Input } from '@angular/core';
import {PostService} from '../../service/post.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {joinTestLogs} from 'protractor/built/util';
import { AppState } from '../../redux/state/appState'
import { PostActions } from '../../redux/actions/postActions'

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

  constructor(private route: ActivatedRoute, private postService: PostService, private postActions: PostActions, private router: Router) { }

  ngOnInit(): void {
    this.editablePost = history.state.data.post;
    this.toCreate = history.state.data.toCreate;

  }

  openDialog(type: string): void {
  }

  onSubmitCreate(): void{
    const post: Post = this.post.value;
    post.createdDate = new Date();
    this.postActions.addPost(post);
     this.router.navigate(['/posts/']);
  }

  onSubmitUpdate(): void{
    const post: Post = this.post.value;
    post.createdDate = new Date();
    this.postActions.updatePost(post);
    this.router.navigate(['/posts/']);
  }
  getPicture(url: string): void{
    console.log('this is the imgpath: ', url);
    this.postService.uploadPictureToAPI(url);
  }
}
