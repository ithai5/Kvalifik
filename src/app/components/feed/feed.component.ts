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

  constructor(private postActions: PostActions, 
              private eventActions: EventActions, 
              private ngRedux: NgRedux<AppState>) { }

  ngOnInit(): void {
    //Load these lists into the Redux state (requires being logged in)
    console.log("ngOnINIT")
    this.postActions.getPostList();
    this.eventActions.getEventList();

    //Declare separate lists for each type of WebActivity
    let postList: WebActivity[];
    let eventList: WebActivity[];

    //Instantiate postList with data from the state
    
    postList = this.ngRedux.getState().postState.postList.map((post) => {
      return {... post, type: "post"};
    }) as WebActivity[];

    this.webActivities = this.sortByDate([... postList, ... this.webActivities]);
    //Instantiate eventList with data from the state
    eventList = this.ngRedux.getState().eventState.eventList.map((event) => {
      return {... event, type: "event"};
    }) as WebActivity[];
    
    this.webActivities = this.sortByDate([... eventList, ... this.webActivities])

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
