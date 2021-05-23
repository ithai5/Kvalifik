import { Component } from '@angular/core';
import { UserActions } from './redux/actions/userActions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kvalifik';

  constructor(private userActions: UserActions) {}

  logout() {
    this.userActions.logout();
  }
}
