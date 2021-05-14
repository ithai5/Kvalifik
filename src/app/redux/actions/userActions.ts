import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { User } from 'src/app/entities/user';
import { AppState } from '../state/appState';
import {AuthService} from '../../service/auth.service';

@Injectable({ providedIn: 'root'})
export class UserActions{
    constructor(private ngRedux: NgRedux<AppState>, private authService: AuthService) {}
    
    static LOGIN = 'LOGIN';
    static ADD_USER = 'ADD_USER';
    static UPDATE_USER = 'UPDATE_USER';
    static DELETE_USER = 'GET_USERS';


    login(user: any): void {
        this.authService.login(user).subscribe(res =>{
          this.ngRedux.dispatch({
            type: UserActions.LOGIN,
            payload: {userInfo: res.email, userToken: res.idToken},
          });
        })
    }

    addUser(user: User): void {
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
    /*
    getUsers(): void {
      let userList;

      userList = Object.entries(res).map(([key, value])=>{
        let user = value as User;
        return {... user, id: key}; // converting object into array
      })
      
      this.ngRedux.dispatch({
        //call to post service
        type: UserActions.GET_USERS,
        payload: userList
      })
    }
    */
}
