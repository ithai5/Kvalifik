import {Component, OnInit, SimpleChanges} from '@angular/core';
import {UserActions} from '../../redux/actions/userActions';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../../redux/state/appState';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  isUserLoggedIn: boolean;

  constructor(private userActions: UserActions, private ngRedux: NgRedux<AppState>) {
  }

  logout() {
    this.userActions.logout();
  }

  ngOnInit(): void {
    this.isUserLoggedIn = this.ngRedux.getState().userState.userInfo !== null
  }
}
