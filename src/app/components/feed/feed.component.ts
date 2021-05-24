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
  webActivities: WebActivity[] = []

  constructor(private postActions: PostActions, private eventActions: EventActions, private ngRedux: NgRedux<AppState>) { }

  ngOnInit(): void {
    //Load these lists into the Redux state (requires being logged in)
    this.postActions.getPostList();
    this.eventActions.getEventList();

    //Declare separate lists for each type of WebActivity
    let postList: WebActivity[];
    let eventList: WebActivity[];

    //Instantiate postList with data from the state
    this.ngRedux.select(state => state.postState).subscribe(res => {
      // postList = res.postList as WebActivity[];
      this.webActivities =this.sortByDate(
        [... res.postList as WebActivity[], ... this.webActivities])

    });

    //Instantiate eventList with data from the state
    this.ngRedux.select(state => state.eventState).subscribe(res => {
      // eventList = res.eventList as WebActivity[];
      this.webActivities = this.sortByDate(
        [... res.eventList as WebActivity[], ... this.webActivities])
    });

    //Concat the two arrays, and instantiate webActivities with the combined data
    //this.webActivities = postList.concat(eventList);
  }

  sortByDate(webActivityList:  WebActivity[]){
    return webActivityList.sort((a,b) => {
      if(a.createdDate < b.createdDate) return -1;
      if (a.createdDate > b.createdDate) return 1;
      return 0;
    })
  }



}
