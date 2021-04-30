import { EventActions } from '../actions/eventActions'
import { EventListState } from '../state/eventListState';
import { tassign } from 'tassign';
import { EventService } from 'src/app/service/event.service';
import { DataService } from 'src/app/service/data.service';


export const INITIAL_STATE: EventListState = {
  eventList: new EventService( new DataService(), null).getEvents();
};

export function eventReducer(state: EventListState = INITIAL_STATE, action: any): any {
  switch(action.type) {
    case EventActions.ADD_EVENT:
      return tassign(state, { eventList: state.eventList.concat(action.payload) });
    case EventActions.UPDATE_EVENT:
      return tassign(state, { eventList: state.eventList.map(event => {
        if (event.id === action.payload.id) {
          return {...event, ...action.payload, id: event.id};
          }
          else{
            return event;
          }
      })
    });  
    case EventActions.DELETE_EVENT:
      return tassign(state, { eventList: state.eventList.filter(event => {
        if(event.id !== action.payload.id) {
          return event;
        }
      })});

      default:
        return state;
  }
}