import { combineReducers } from 'redux';
import { PostState } from './postState';
import { postReducer } from '../reducer/postReducer'
import { UserState } from './userState';
import { userReducer } from '../reducer/userReducer';
import { EventListState } from './eventListState';
import { eventReducer } from '../reducer/eventReducer';

export class AppState {
    postList?: PostState;
    user?: UserState;
    eventList?: EventListState;
}

export const rootReducer = combineReducers<AppState>({
    postList: postReducer,
    user: userReducer,
    eventList: eventReducer
    });
