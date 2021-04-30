import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../state/appState';

@Injectable({ providedIn: 'root' })
export class EventActions {
    constructor(private ngRedux: NgRedux<AppState>){}
    static ADD_EVENT = 'ADD_EVENT';
    static UPDATE_EVENT = 'UPDATE_EVENT';
    static DELETE_EVENT = 'DELETE_EVENT';

    addEvent(event: Event): void {
        this.ngRedux.dispatch({
            type: EventActions.ADD_EVENT,
            payload: event,
        })
    }
    updatePost(updateEvent: Event): void{
        this.ngRedux.dispatch({
          type: EventActions.UPDATE_EVENT,
          payload: updateEvent
        });
      }
    deletePost(deleteEvent: Event): void{
        this.ngRedux.dispatch({
          type: EventActions.DELETE_EVENT,
          payload: deleteEvent
        });
      }
}