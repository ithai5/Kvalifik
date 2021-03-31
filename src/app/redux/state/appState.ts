import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { PostsState } from './postsState';
import { postReducer } from '../reducer/postReducer'

export class AppState {
    posts?: PostsState;
}
    
export const rootReducer = combineReducers<AppState>({
    posts: postReducer,
    });
    