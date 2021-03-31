import { PostActions } from '../actions/postActions';
import { PostsState } from '../state/postsState';
import { tassign } from 'tassign';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/entities/post';
import { DataService } from 'src/app/service/data.service';


const INITIAL_STATE: PostsState = {posts: new PostService(
  new DataService(), null).getPosts()}

export function postReducer(state: PostsState = INITIAL_STATE, action: any) {
  switch (action.type) {
    case PostActions.APPEND_POST:
      return tassign(state, { posts: state.posts.concat(action.payload) });
    
    default:
      return state;
  }
}
