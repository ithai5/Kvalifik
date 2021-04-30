import { combineReducers } from 'redux';
import { PostsState } from './postsState';
import { postReducer } from '../reducer/postReducer'
import { UserState } from './userState';
import {userReducer} from '../reducer/userReducer';

export class AppState {
    posts?: PostsState;
    user?: UserState;
}

export const rootReducer = combineReducers<AppState>({
    posts: postReducer,
    user: userReducer,
    });
