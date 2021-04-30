import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { PostsState } from './postsState';
import { postReducer } from '../reducer/postReducer'
import { UserState } from './userState';
import { userReducer } from '../reducer/userReducer';
import { EventListState } from './eventListState';
import { eventReducer } from '../reducer/eventReducer';

export class AppState {
    posts?: PostsState;
    user?: UserState;
    eventsList?: EventListState;
}

export const rootReducer = combineReducers<AppState>({
    posts: postReducer,
    user: userReducer,
    eventList: eventReducer
    });
