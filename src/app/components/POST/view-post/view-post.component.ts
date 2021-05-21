import { Component, OnInit } from '@angular/core';
import {Post} from '../../../entities/post';
import {ActivatedRoute} from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import {FirebaseStorageService} from '../../../service/firebase-storage.service';


@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute, private firebase: FirebaseStorageService) { }

  ngOnInit(): void {
    this.post = history.state.data.post;
    this.firebase.downloadImageFromStorage(this.post.media).subscribe(res => this.post.media = res);
  }

}
