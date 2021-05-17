import { combineReducers } from 'redux';
import { PostState } from './postState';
import { postReducer } from '../reducer/postReducer'
import { UserState } from './userState';
import { userReducer } from '../reducer/userReducer';
import { EventState } from './eventState';
import { eventReducer } from '../reducer/eventReducer';

export class AppState {
    postState?: PostState;
    userState?: UserState;
    eventState?: EventState;
}

export const rootReducer = combineReducers<AppState>({
    postState: postReducer,
    userState: userReducer,
    eventState: eventReducer
    });
