import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/entities/post';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostActions } from '../../../redux/actions/postActions'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  editablePost: Post;
  toCreate: boolean;
  post = new FormGroup({
    title : new FormControl('', Validators.required),
    content : new FormControl('', Validators.required),
    picture : new FormControl()
  });

  constructor(private route: ActivatedRoute,
    private postActions: PostActions,
    private router: Router)
    {}

  ngOnInit(): void {
    console.log("ngOnInit history.state: ", history.state.data.post);


    this.editablePost = history.state.data.post;
    this.toCreate = history.state.data.toCreate;

  }

  openDialog(type: string): void {
  }

  onSubmitCreate(): void{
    this.post.value.createdDate = new Date();
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
