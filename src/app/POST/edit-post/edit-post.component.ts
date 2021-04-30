import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/entities/post';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostActions } from '../../redux/actions/postActions'
import { PostService } from 'src/app/service/post.service';

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

  constructor(private route: ActivatedRoute,
    private postService: PostService,
    private router: Router)
    {}

  ngOnInit(): void {
    this.editablePost = history.state.data.post;
    this.toCreate = history.state.data.toCreate;

  }

  openDialog(type: string): void {
  }

  onSubmitCreate(): void{
    this.post.value.createdDate = new Date();
    this.postService.createPost(this.post.value);
    this.router.navigate(['/postList/']);
  }

  onSubmitUpdate(): void{
    const post: Post = this.post.value;
    post.createdDate = new Date();
    this.postActions.updatePost(post);
    this.router.navigate(['/postList/']);
  }
  getPicture(url: string): void{
  }
}
