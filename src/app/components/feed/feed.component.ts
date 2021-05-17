import { Component, OnInit } from '@angular/core';
import {PostActions} from '../../redux/actions/postActions';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../../redux/state/appState';
import {EventActions} from '../../redux/actions/eventActions';
import {WebActivity} from '../../entities/web-activity';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  webActivities : WebActivity [] = []

  constructor(private postActions: PostActions, private eventActions: EventActions, private ngRedux: NgRedux<AppState>) { }

  ngOnInit(): void {
    this.postActions.getPostList();
    this.eventActions.getEventList();
    this.ngRedux.select(state => state.postState).subscribe(res => {
      this.webActivities.push(res.postList as unknown as WebActivity)
    })
    this.ngRedux.select(state => state.eventState).subscribe(res => {
      this.webActivities.push(res.eventList as unknown as WebActivity)
    })
  }

}
