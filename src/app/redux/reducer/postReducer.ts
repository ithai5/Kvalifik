import { PostActions } from '../actions/postActions';
import { PostState } from '../state/postState';
import { tassign } from 'tassign';


export const INITIAL_STATE: PostState = {
  postList: [] //maybe the initial state should be already the information from the db?
};

export function postReducer(state: PostState = INITIAL_STATE, action: any): any {
  switch (action.type) {
      case PostActions.ADD_POST:
        return tassign(state, { postList: state.postList.concat(action.payload) });
      case PostActions.UPDATE_POST:
        return tassign(state, { postList: state.postList.map(post => {
          if (post.id === action.payload.id){
              return{...post, ...action.payload, id: post.id};
            }
            else{
              return post;
            }
          })
        });
      case PostActions.DELETE_POST:
        return tassign(state, { postList: state.postList.filter(post => {
          if (post.id !== action.payload.id) { return post; }
      })});

      case PostActions.GET_POST_LIST:
        return tassign(state, {postList: action.payload});

      case PostActions.GET_POST_LIST_FOR_USER:
        return tassign(state, {postList: action.payload});

      case PostActions.CLEAR_LIST:
        return tassign(state, {postList: []});

      default:
        return state;

  }

}
