import { Injectable } from '@angular/core';
import {Post} from '../entities/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../redux/state/appState';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public posts: Post[];

  private httpOptions = {
    headers: new HttpHeaders({'content-Type': 'application.json'})
  };

  constructor(private httpClient: HttpClient, private ngRedux: NgRedux<AppState>) {
    //this.posts = this.getPosts();
  }
  
  getIdToken(): string {
    return this.ngRedux.getState().user.userToken;
  }

  
}
