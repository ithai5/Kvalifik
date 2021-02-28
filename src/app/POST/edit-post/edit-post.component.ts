import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/entities/post';
import { Input } from '@angular/core';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  editablePost: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.editablePost = history.state.data.post;
    console.log(this.editablePost);
  }

  openDialog(type: string): void {
    console.log(type);
  }
}
