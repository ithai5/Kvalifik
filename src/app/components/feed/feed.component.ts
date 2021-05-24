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
    this.ngRedux.select(state => state.postState).subscribe(res => {
      console.log("ngRedux Post state")
      postList = res.postList as WebActivity[];
    });

    //Instantiate eventList with data from the state
    this.ngRedux.select(state => state.eventState).subscribe(res => {
      console.log("ngRedux Event State")
      eventList = res.eventList as WebActivity[];   
    });
    
    //Concat the two arrays, and instantiate webActvities with the combined data
    this.webActivities = postList.concat(eventList);
  }

}
