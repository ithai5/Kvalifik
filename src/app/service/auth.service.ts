import { Injectable } from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../redux/state/appState';
import {environment} from '../../environments/environment';
import {INITIAL_STATE} from '../redux/reducer/postReducer';
import {Post} from '../entities/post';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';
import {User} from '../entities/user';
import {UserActions} from '../redux/actions/userActions';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService{

  constructor(private ngRedux: NgRedux<AppState>,private httpClient: HttpClient, private userActions: UserActions, private router: Router) {
    super();
  }

  getIdToken() : string{
    return this.ngRedux.getState().user.userToken
  }

  login(loginInfo: any): any {
    const apiToken = environment.tokenAPI;
    const apiURL: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + apiToken;

    return this.httpClient.post<any>(apiURL, loginInfo, this.getHttpHeader())
      .subscribe((res: any) => {
        const userInfo = {
          email: res.email
        } as User ;
          this.userActions.login(userInfo, res.idToken);
          this.loadPostList();

      });

  }


  loadPostList(): void {
    this.httpClient.get(this.dbAccess("Posts", this.getIdToken()), this.getHttpHeader()).subscribe(res => {
      INITIAL_STATE.postList = res as Post[];
      this.router.navigate(['postList'])
    });
  }



}
