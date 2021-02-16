import {WebUser} from './web-user';

export class Comment{
  webUser: WebUser;
  timestamp: Date;
  content: string;
  numLike: number; /*can be nice to implement with webUser array*/
}
