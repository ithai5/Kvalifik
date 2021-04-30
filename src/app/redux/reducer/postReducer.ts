import { PostActions } from '../actions/postActions';
import { PostsState } from '../state/postsState';
import { tassign } from 'tassign';
import { PostService } from '../../service/post.service'
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../state/appState';

export const INITIAL_STATE: PostsState = {
  posts: []
};

export function postReducer(state: PostsState = INITIAL_STATE, action: any): any {
  switch (action.type) {
      case PostActions.ADD_POST:
        return tassign(state, { posts: state.posts.concat(action.payload) });
      
      case PostActions.UPDATE_POST:
        return tassign(state, { posts: state.posts.map(post => {
          if (post.id === action.payload.id){
              return{...post, ...action.payload, id: post.id};
            }
            else{
              return post;
            }
          })
        });
      
      case PostActions.DELETE_POST:
        return tassign(state, { posts: state.posts.filter(post => {
          if (post.id !== action.payload.id) { return post; }
      })});

      case PostActions.GET_POSTS:
          return tassign(state, {posts: action.payload})

      default:

      return state;
  }
}
