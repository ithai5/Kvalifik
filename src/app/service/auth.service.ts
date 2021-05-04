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

  constructor(private httpClient: HttpClient, private router: Router) {
    super();
  }

  login(loginInfo: any): any {
    const apiURL: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.tokenAPI;
    return this.httpClient.post<any>(apiURL, loginInfo, this.getHttpHeader())
      /*.subscribe((res: any) => {
        console.log(res);


      });*/
  }
}
