import { PostActions } from '../actions/postActions';
import { PostsState } from '../state/postsState';
import { tassign } from 'tassign';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/entities/post';

const postService: PostService;

const INITIAL_STATE: PostsState = {posts: PostService}

export function usersReducer(state: UsersState = INITIAL_STATE, action:any) {
 switch (action.type) {
  case UsersActions.SET_TYPE:
    return tassign(state, { isBaby: action.payload });
   default:
    return state;
}
}
