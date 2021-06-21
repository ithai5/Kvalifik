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

   ngOnInit  (): void {
     this.ngOnAsync()
   }

   output(string: string): void {
     console.log(string);
   }
  async ngOnAsync() {
    await this.postActions.getPostList();
    await this.eventActions.getEventList();
    await this.ngRedux.getState().postState.postList.forEach((post) => {
      this.webActivities.push({... post, type: "post"})});
    await this.ngRedux.getState().eventState.eventList.forEach((event) => {
        this.webActivities.push({... event, type: "event"});
      })
   await this.sortByDate(this.webActivities)
  }

  sortByDate(webActivityList:  WebActivity[]){
    return webActivityList.sort((a,b) => {
      if(a.createdDate < b.createdDate) return 1;
      if (a.createdDate > b.createdDate) return -1;
      return 0;
    })
  }



}
