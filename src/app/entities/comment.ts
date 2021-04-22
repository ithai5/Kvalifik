import {User} from './user';

export class Comment{
  user: User;
  timestamp: Date;
  content: string;
  numLike: number; /*can be nice to implement with user array*/
}
