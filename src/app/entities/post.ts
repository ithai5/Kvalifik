import {Comment} from './comment';
import {WebActivity} from './web-activity';


export class Post extends WebActivity{
  id: any;
  likeCount: number;
  comments: Comment [];
}

