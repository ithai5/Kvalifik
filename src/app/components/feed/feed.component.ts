import { Component, OnInit } from '@angular/core';
import {PostActions} from '../../redux/actions/postActions';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../../redux/state/appState';
import {EventActions} from '../../redux/actions/eventActions';
import {WebActivity} from '../../entities/web-activity';
import {Router} from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  webActivities: WebActivity[] = []

  constructor(private postActions: PostActions,
              private eventActions: EventActions,
              private ngRedux: NgRedux<AppState>,
              private router: Router
             ) { }

  ngOnInit  (): void {
    this.postActions.getPostList();
    this.eventActions.getEventList();
    this.ngRedux.select(state => state).subscribe(res => {
      this.webActivities = []
      this.webActivities.push(... res.postState.postList, ... res.eventState.eventList);
      this.sortByDate(this.webActivities)
    })
  }

  sortByDate(webActivityList:  WebActivity[]){
    return webActivityList.sort((a,b) => {
      if(a.createdDate < b.createdDate) return 1;
      if (a.createdDate > b.createdDate) return -1;
      return 0;
    })
  }



}
