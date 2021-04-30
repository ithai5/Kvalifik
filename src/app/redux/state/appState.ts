import { combineReducers } from 'redux';
import { PostState } from './postState';
import { postReducer } from '../reducer/postReducer'
import { UserState } from './userState';
import {userReducer} from '../reducer/userReducer';

export class AppState {
    postList?: PostState;
    user?: UserState;
}

export const rootReducer = combineReducers<AppState>({
    postList: postReducer,
    user: userReducer,
    });
