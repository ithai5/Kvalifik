import { Component, OnInit } from '@angular/core';
import {Post} from '../../entities/post';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  viewedPost: Post;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.viewedPost = history.state.data.post;
  }

}
