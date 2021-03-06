import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/entities/post';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostActions } from '../../../redux/actions/postActions'
import { AngularFireStorage } from '@angular/fire/storage';
import { v4 as uuidv4 } from 'uuid';
import {FirebaseStorageService} from '../../../service/firebase-storage.service';
import { NgRedux } from '@angular-redux/store';
import { AppState } from 'src/app/redux/state/appState';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  editablePost: Post;
  toCreate: boolean;
  media: string;
  post = new FormGroup({
    title : new FormControl('', Validators.required),
    content : new FormControl('', Validators.required),
    picture : new FormControl(),
  });

  constructor(private route: ActivatedRoute,
    private postActions: PostActions,
    private router: Router,
    private storage: FirebaseStorageService,
    private ngRedux: NgRedux<AppState>)
    {}

  ngOnInit(): void {
    this.editablePost = history.state.data.post;
    this.toCreate = history.state.data.toCreate;
  }

  openDialog(event: any): void {
    const uuid = uuidv4();
    this.storage.uploadImageToStorage(uuid+"", event.target.files[0]);
    this.media = uuid;
  }

  onSubmitCreate(): void{
    this.post.value.createdDate = new Date();
    this.post.value.media = this.media;
    //we get the author from the ngRedux. from getState() we select the specific userState and thus get the userInfo (from userState)
    this.post.value.author = this.ngRedux.getState().userState.userInfo;


    // need to get the user that currently logged in and add it to the post author
    this.postActions.addPost(this.post.value);
    this.router.navigate(['/postList/']);
  }

  onSubmitUpdate(): void{
    //The created date should stay the same, but maybe find a different way of displaying time of update?
    this.editablePost.title = this.post.value.title;
    this.editablePost.content = this.post.value.content;
    this.postActions.updatePost(this.editablePost);
    this.router.navigate(['/postList/']);
  }
}
