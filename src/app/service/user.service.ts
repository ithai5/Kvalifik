import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../redux/state/appState';
import {User} from '../entities/user';


@Injectable({
  providedIn: 'root'
})

export class UserService extends ApiService {

  constructor(private httpClient: HttpClient, private ngRedux: NgRedux<AppState>) { 
    super();
  }

  signupUser(user: User, auth: string): void {
    this.httpClient.post(this.dbAccess("Users", auth), user, this.getHttpHeader()).subscribe();
  }

  //creates a new user
  createUser(user: User): void {
    this.httpClient.post(this.dbAccess("Users", this.ngRedux.getState().user.userToken), user, this.getHttpHeader()).subscribe();
  }

  //load user from Firebase
  getUserList(): any {
    return this.httpClient.get(this.dbAccess("Users", this.ngRedux.getState().user.userToken), this.getHttpHeader())
  }

  //update user
  updateUser(user: User): void {
    this.httpClient.patch(this.dbAccess(`User/${user.email}`, this.ngRedux.getState().user.userToken), user, this.getHttpHeader()).subscribe();
  }

  //delete user
  deleteUser(user: User): void {
    this.httpClient.delete(this.dbAccess(`User/${user.email}`, this.ngRedux.getState().user.userToken), this.getHttpHeader()).subscribe();
  }

}
