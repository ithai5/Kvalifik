import { combineReducers } from 'redux';
import { PostListState } from './postListState';
import { postReducer } from '../reducer/postReducer'
import { UserState } from './userState';
import {userReducer} from '../reducer/userReducer';

export class AppState {
    postList?: PostListState;
    user?: UserState;
}

export const rootReducer = combineReducers<AppState>({
    postList: postReducer,
    user: userReducer,
    });
