import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';
import {Router} from '@angular/router';
import { UserService } from './user.service';
import { User } from '../entities/user';
import { UserState } from '../redux/state/userState';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService{

  constructor(private httpClient: HttpClient, private router: Router, private userService: UserService) {
    super();
  }

  login(loginInfo: any): any {
    const apiURL: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebase.apiKey;
    return this.httpClient.post<any>(apiURL, loginInfo, this.getHttpHeader())
  }

  signup(signupInfo: any, user: User): any {
    const apiURL: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebase.apiKey;

    return this.httpClient.post<any>(apiURL, signupInfo, this.getHttpHeader()).subscribe(res => {
      console.log(res);

      this.userService.signupUser(user, res.idToken);
    });
  }

  persistUserState(userState: UserState): void {
    //Store the information from a UserState object in
    //the Window.localStorage
    localStorage.setItem("userState", JSON.stringify(userState));
  }

  retrieveUserState(): UserState {
    const fromLocal: UserState = JSON.parse(localStorage.getItem("userState")) as unknown as UserState;
    let userState: UserState;

    if (fromLocal !== null) {
      userState = {userInfo: fromLocal.userInfo, userToken: fromLocal.userToken} as UserState;
    } else {
      userState = {userInfo: null, userToken: ''} as UserState;
    }
    return userState;
  }

  clearPersistedState(): void {
    localStorage.removeItem("userState");
  }
}
