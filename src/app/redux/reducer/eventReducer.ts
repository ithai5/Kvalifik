import { EventActions } from '../actions/eventActions'
import { EventState } from '../state/eventState';
import { tassign } from 'tassign';


export const INITIAL_STATE: EventState = {
  eventList: []
};

export function eventReducer(state: EventState = INITIAL_STATE, action: any): any {
  
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
    
    case EventActions.GET_EVENT_LIST:
      return tassign(state, {eventList: action.payload});
    
    case EventActions.CLEAR_LIST:
      return tassign(state, {eventList: []});

      default:

      return state;
  }
}
