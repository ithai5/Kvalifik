import {Comment} from './comment';
import {WebActivity} from './web-activity';

export class Post extends WebActivity{
  likeCount: number;
  comments: Comment [];
}
