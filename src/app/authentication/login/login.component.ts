import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserActions} from '../../redux/actions/userActions';
import {User} from '../../entities/user';
import {environment} from '../../../environments/environment';
import { INITIAL_STATE } from '../../redux/reducer/userReducer'
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private httpOptions = {
    headers: new HttpHeaders({'content-Type': 'application.json'})
  };

  loginInfo = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private httpClient: HttpClient, private userActions: UserActions, private authService: AuthService) { }

  ngOnInit(): void {
  }

  tryLogin() : void {
    const userDetails = {
      email: this.loginInfo.value.email,
      password: this.loginInfo.value.password,
      returnSecureToken: true,
    }
    this.userActions.login(userDetails )
    /*this.authService.login(userDetails)*/

  }
/*
  tryLogin(): any {
    const apiToken = environment.tokenAPI;
    const apiURL: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + apiToken;
    const userDetails: any = {
      email: this.loginInfo.value.email,
      password: this.loginInfo.value.password,
      returnSecureToken: true,
    };

    console.log(userDetails);
    return this.httpClient.post<any>(apiURL, userDetails, this.httpOptions)
      .subscribe((res: any) => {
        const userInfo = {
          email: res.email
        } as User ;

        this.userActions.login(userInfo, res.idToken);
      });
  }
*/
}
