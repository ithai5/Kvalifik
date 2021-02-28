import { Injectable } from '@angular/core';
import {Post} from './entities/post';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  // holds hard coded posts, need to be part of a database
  private posts: Post [] = [
    {title: 'why are we doing all of that', content: 'Bla-Bla',
      media: [],
      status: 'published',
      createdDate: new Date(2021, 0, 2),
      collection: [],
      isPinned: true,
      responsible: [],
      id: '1',
      likeCount: 20,
      comments: []
    } as Post,
    {title: 'I dont know', content: 'Bla-Bla-Bla',
      media: [],
      status: 'published',
      createdDate: new Date(2021, 4, 28),
      collection: [],
      isPinned: true,
      responsible: [],
      id: '2',
      likeCount: 27,
      comments: []
    } as Post,
    {title: 'It doesnt matter, it is all about practice', content: 'Bla-Bla-Bla-Bla',
      media: [],
      status: 'published',
      createdDate: new Date(2021, 4, 28),
      collection: [],
      isPinned: true,
      responsible: [],
      id: '3',
      likeCount: 8,
      comments: []
    } as Post,
  ];
  constructor() { }
  getPosts(): Post[] {
    return this.posts;
  }
   addPost(post: Post): Post {
      return post; // need to be implement in the future
   }
   deletePost(id: any): void{
     // need to be implement in the future
   }
}
