import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { PostsState } from './postsState';

export class AppState {
    posts?: PostsState;
}
    
export const rootReducer = combineReducers<AppState>({
    posts: postReducer,
    
    router: routerReducer
    });
    