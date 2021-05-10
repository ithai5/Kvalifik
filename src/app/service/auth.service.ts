import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';
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

  signup(signupInfo: any): any {
    const apiURL: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.tokenAPI;
    return this.httpClient.post<any>(apiURL, signupInfo, this.getHttpHeader()).subscribe();
  }
}
