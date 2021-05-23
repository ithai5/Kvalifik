import { UserState } from '../state/userState';
import {UserActions} from '../actions/userActions';
import {tassign} from 'tassign';

export const INITIAL_STATE: UserState = {userInfo: null, userToken: '', userList: []};

export function userReducer(state: UserState = INITIAL_STATE, action: any): any {
    switch (action.type){
      
      case UserActions.LOGIN:
        return tassign(state, {userInfo: action.payload.userInfo, userToken: action.payload.userToken});
      
      case UserActions.LOGOUT:
        return tassign(state, {userInfo: null, userToken: ''});

      case UserActions.ADD_USER:
        return tassign(state, { userList: state.userList.concat(action.payload.user)});

      case UserActions.UPDATE_USER:
        return tassign(state, { userList: state.userList.map(user => {
          if (user.email === action.payload.email){
              return{...user, ...action.payload, email: user.email};
            }
            else{
              return user;
            }
          })
        });

      case UserActions.DELETE_USER:
        return tassign(state, { userList: state.userList.filter(user => {
          if (user.email !== action.payload.email) { return user; }
      })});

      case UserActions.GET_USER_LIST:
        return tassign(state, {userList: action.payload});

      case UserActions.CLEAR_LIST:
        return tassign(state, {userList: []});
      
      default:
        return state;
    }

}
