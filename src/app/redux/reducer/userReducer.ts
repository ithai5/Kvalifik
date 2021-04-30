import { UserState } from '../state/userState';
import {UserActions} from '../actions/userActions';
import {tassign} from 'tassign';

export const INITIAL_STATE: UserState = {userInfo: null, userToken: ''};

export function userReducer(state: UserState = INITIAL_STATE, action: any): any {
    switch (action.type){
      case UserActions.LOGIN:
        return tassign(state, {userInfo: action.payload.userInfo, userToken: action.payload.userToken});
      default:
        return state;
    }

}
