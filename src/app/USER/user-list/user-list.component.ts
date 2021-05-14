import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../entities/user';
import { AppState } from '../../redux/state/appState';
import { NgRedux } from '@angular-redux/store';
import { UserActions } from '../../redux/actions/userActions';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  isLoggedIn: boolean = false;
  userList: User[];
  displayedColumns: string [] = ['firstName', 'lastName', 'email' , 'title', 'image', 'edit'];
  public search: string = '';

  constructor(private router: Router,
              private ngRedux: NgRedux<AppState>,
              private userActions: UserActions) { }

  ngOnInit(): void {
    // this.userActions.

  }

  createUser(){}

}
