import { PostActions } from '../actions/postActions';
import { PostsState } from '../state/postsState';
import { tassign } from 'tassign';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/entities/post';
import { DataService } from 'src/app/service/data.service';



export const INITIAL_STATE: PostsState = {
  posts: new PostService( new DataService(), null).getPosts()
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

      default:
      return state;
  }
}
