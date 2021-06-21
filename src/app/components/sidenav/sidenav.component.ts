import { Component, OnInit } from '@angular/core';
import {UserActions} from '../../redux/actions/userActions';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../../redux/state/appState';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  isUserLoggedIn: boolean;

  constructor(private userActions: UserActions, private  ngRedux: NgRedux<AppState>) { }

  logout() {
    this.userActions.logout();
  }

  ngOnInit(): void {
    this.isUserLoggedIn = this.ngRedux.getState().userState.userInfo !== null;
  }

}
