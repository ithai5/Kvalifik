import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventActions } from 'src/app/redux/actions/eventActions';
import { AppState } from 'src/app/redux/state/appState';
import { Event } from '../../../entities/event';
import { EventService } from '../../../service/event.service'; 

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  isLoggedIn: boolean = false;
  events: Event[];
  displayedColumns: String[] = ['title', 'startDate', 'location', 'status', 'edit'];
  
  constructor(private eventService: EventService, 
              private router: Router,
              private ngRedux: NgRedux<AppState>, 
              private eventActions: EventActions) { }

  ngOnInit(): void {
      this.ngRedux.select(state => state.eventState).subscribe(Response => {
      this.events = Response.eventList;
    })
  }

  timeForTable(stringDate: string): string {
    const date: Date = new Date(stringDate);
    return date.getDate() + '/' + date.getMonth() + 1 + '/' + date.getFullYear();
  }
  viewEvent(viewedEvent: Event): void{}
  editEvent(editableEvent: Event): void {}
  deleteEvent(event: Event): void {}
  
  createEvent(): void { 
    this.router.navigate(['eventList/edit/'], {state: {
                                                data: {
                                                  event: {
                                                    title: 'your title here', 
                                                    content: 'content here mate'
                                                  }, 
                                                    toCreate: true
                                                  }
                                                }
                                              })
  };
}
