import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../state/appState';
import {EventService} from '../../service/event.service';
import { Event } from 'src/app/entities/event';


@Injectable({ providedIn: 'root' })
export class EventActions {
    constructor(private ngRedux: NgRedux<AppState>, private eventService: EventService){}
    static ADD_EVENT = 'ADD_EVENT';
    static UPDATE_EVENT = 'UPDATE_EVENT';
    static DELETE_EVENT = 'DELETE_EVENT';
    static GET_EVENT_LIST = 'GET_EVENT_LIST';
    static CLEAR_LIST = 'CLEAR_LIST';
    static GET_EVENT_LIST_FOR_USER = 'GET_EVENT_LIST_FOR_USER';

    addEvent(event: Event): void {
        this.eventService.createEvent(event);
        this.ngRedux.dispatch({
            type: EventActions.ADD_EVENT,
            payload: event,
        })
    }

    updateEvent(updateEvent: Event): void{
        this.eventService.updateEvent(updateEvent);

        this.ngRedux.dispatch({
          type: EventActions.UPDATE_EVENT,
          payload: updateEvent
        });
    }

      deleteEvent(deleteEvent: Event): void{
        this.eventService.deleteEvent(deleteEvent);
        this.ngRedux.dispatch({
          type: EventActions.DELETE_EVENT,
          payload: deleteEvent
        });
    }

    getEventList(): void{
      this.eventService.getEventList().subscribe(res => {
        let eventList: Event[];
        eventList = Object.entries(res).map(([key, value]) => {
          let event = value as Event;
          return {... event,  id: key, createdDate: new Date(event.createdDate), startDate: new Date(event.startDate), endDate: new Date(event.endDate)};
        });

        this.ngRedux.dispatch({
          type: EventActions.GET_EVENT_LIST,
          payload: eventList
        });
      });
    }
  getEventListForUser(): void {
      this.eventService.getEventListForUser().subscribe(res => {
        let eventList: Event [];
        eventList = Object.entries(res).map(([key, value]) => {
          let event = value as Event;
          return {... event,  id: key, createdDate: new Date(event.createdDate), startDate: new Date(event.startDate), endDate: new Date(event.endDate)};
        })
        this.ngRedux.dispatch({
          type: EventActions.GET_EVENT_LIST_FOR_USER,
          payload: eventList
        })
      })
  }


  clearList(): void {
      this.ngRedux.dispatch({
        type: EventActions.CLEAR_LIST,
      });
    }
}
