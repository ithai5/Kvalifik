import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { User } from 'src/app/entities/user';
import { AppState } from '../state/appState';
import {AuthService} from '../../service/auth.service';
import { UserService } from 'src/app/service/user.service';
import { UserState } from '../state/userState';
import { EventActions } from './eventActions';
import { PostActions } from './postActions';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root'})
export class UserActions{
    constructor(private ngRedux: NgRedux<AppState>,
      private router: Router,
      private authService: AuthService,
      private userService: UserService,
      private eventActions: EventActions,
      private postActions: PostActions) {}

    static LOGIN = 'LOGIN';
    static LOGOUT = 'LOGOUT';
    static ADD_USER = 'ADD_USER';
    static UPDATE_USER = 'UPDATE_USER';
    static DELETE_USER = 'DELETE_USER';
    static GET_USER_LIST = 'GET_USER_LIST';
    static CLEAR_LIST = 'CLEAR_LIST';


    login(user: any): void {
      this.authService.login(user).subscribe(res =>{
        //Save the relevant info from UserState to Window.localStorage
        this.authService.persistUserState( {
          userInfo: res.email,
          userToken: res.idToken,
        } as UserState);
        window.location.href = "/feed"
        this.ngRedux.dispatch({
          type: UserActions.LOGIN,
          payload: {userInfo: res.email, userToken: res.idToken},
        });
      })
    }

    logout() {
      this.authService.clearPersistedState();
      //Clear userinfo from store
      this.ngRedux.dispatch({
        type: UserActions.LOGOUT,
      });
      //Clear the other stores
      this.eventActions.clearList();
      this.postActions.clearList();
      this.clearList();
      window.location.href = "/"
    }

    addUser(user: User, password: string): void {
      const signupInfo = {
        email: user.email,
        password: password,
        returnSecureToken: true,
      };

      //sign up a new user to the Firebase Authentication
      this.authService.signup(signupInfo, user);

      this.ngRedux.dispatch({
        type: UserActions.ADD_USER,
        payload: user
      });

    }

    updateUser(updateUser: User): void {
      this.ngRedux.dispatch({
        type: UserActions.UPDATE_USER,
        payload: updateUser
      });
    }

    deleteUser(deleteUser: User): void {
      this.ngRedux.dispatch({
        type: UserActions.DELETE_USER,
        payload: deleteUser
      })
    }

    getUserList(): void {
      this.userService.getUserList().subscribe(res => {
        let userList: User[];

        userList = Object.entries(res).map(([key, value])=>{
          let user = value as User;
          return {... user, id: key}; // converting object into array
        });

        this.ngRedux.dispatch({
          //call to post service
          type: UserActions.GET_USER_LIST,
          payload: userList
        });
      });
    }

    clearList(): void {
      this.ngRedux.dispatch({
        type: UserActions.CLEAR_LIST,
      });
    }

}
