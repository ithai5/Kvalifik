import { Component, OnInit } from '@angular/core';
import {Post} from '../../../entities/post';
import {ActivatedRoute} from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  viewedPost: Post;

  constructor(private route: ActivatedRoute, private firebase: AngularFireStorage) { }

  ngOnInit(): void {
    this.viewedPost = history.state.data.post;
    this.firebase.ref("newPicture").getDownloadURL().subscribe( (url) => console.log(url) );
  }

}
