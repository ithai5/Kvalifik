import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { PostsState } from './postsState';
import { postReducer } from '../reducer/postReducer'
import { UserState } from './userState';

export class AppState {
    posts?: PostsState;
    user?: UserState;
}

export const rootReducer = combineReducers<AppState>({
    posts: postReducer,
    user: userReducer,
    });
