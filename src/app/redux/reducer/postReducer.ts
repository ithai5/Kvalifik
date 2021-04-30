import { PostActions } from '../actions/postActions';
import { PostListState } from '../state/postListState';
import { tassign } from 'tassign';


export const INITIAL_STATE: PostListState = {
  postList: []
};

export function postReducer(state: PostListState = INITIAL_STATE, action: any): any {
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
      /* Not in use?
      case PostActions.GET_POSTS:
          return tassign(state, {postList: action.payload})
      */
      default:

      return state;
  }
}
