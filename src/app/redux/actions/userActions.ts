import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { User } from 'src/app/entities/user';
import { AppState } from '../state/appState';
import {AuthService} from '../../service/auth.service';

@Injectable({ providedIn: 'root'})
export class UserActions{
    constructor(private ngRedux: NgRedux<AppState>, private authService: AuthService) {}
    static LOGIN = 'LOGIN';

    login(user: any): void {
        this.authService.login(user).subscribe(res =>{
          console.log("hello there", res);
          this.ngRedux.dispatch({
            type: UserActions.LOGIN,
            payload: {userInfo: res.email, userToken: res.idToken},
          });
        })
    }
}
