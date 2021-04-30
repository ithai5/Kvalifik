import { Injectable } from '@angular/core';
//<<<<<<< HEAD
// import {Post} from '../entities/post';
// import { Event } from '../entities/event';
//=======
import { Post } from '../entities/post';
import { Event } from '../entities/event';

// >>>>>>> 919be0753092c854c142956d6f47484da92d20c3
@Injectable({
  providedIn: 'root'
})
export class DataService {
  // holds hard coded posts, need to be part of a database
  private posts: Post [] = [
    {
      title: 'why are we doing all of that', content: 'Bla-Bla',
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
    {
      title: 'I dont know', content: 'Bla-Bla-Bla',
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
    {
      title: 'It doesnt matter, it is all about practice', content: 'Bla-Bla-Bla-Bla',
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
// <<<<<<< HEAD
  
// =======

  private eventList: Event [] = [
    {
      title: 'Beerpong',
      content: 'A funny drinking sport!',
      media: [],
      status: 'published',
      createdDate: new Date(2121, 4, 14),
      isPinned: true,
      responsible: [],
      id: '1',
      startDate: new Date(2021, 4, 20, 18, 0),
      endDate: new Date(2021, 4, 20, 19, 30),
      location: 'String1',
      collaboration: [],
      //eventSchedule
    } as Event,
    {
      title: 'Orientation Race',
      content: 'Find your way through the city',
      media: [],
      status: 'published',
      createdDate: new Date(2121, 4, 14),
      isPinned: true,
      responsible: [],
      id: '2',
      startDate: new Date(2021, 4, 20, 18, 0),
      endDate: new Date(2021, 4, 20, 19, 30),
      location: 'String2',
      collaboration: [],
      //eventSchedule
    } as Event,
    {
      title: 'Orientation Race',
      content: 'Find your way through the city',
      media: [],
      status: 'published',
      createdDate: new Date(2121, 4, 14),
      isPinned: true,
      responsible: [],
      id: '3',
      startDate: new Date(2021, 4, 20, 18, 0),
      endDate: new Date(2021, 4, 20, 19, 30),
      location: 'String3',
      collaboration: [],
      //eventSchedule
    } as Event,
  ];


// >>>>>>> 919be0753092c854c142956d6f47484da92d20c3
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
// <<<<<<< HEAD
   
  //  private events: Event[] = [
  //   {title: 'titleOne', content: '1',
  //   media: [],
  //   status: 'published1',
  //   createdDate: new Date(2021, 4, 28),
  //   collection: [],
  //   isPinned: true,
  //   responsible: [],
  //   id: '1',
  //   testingString: 'Test1'
  //   } as Event,
  //   {title: 'title2', content: '2',
  //   media: [],
  //   status: 'published2',
  //   createdDate: new Date(2021, 4, 28),
  //   collection: [],
  //   isPinned: true,
  //   responsible: [],
  //   id: '2',
  //   testingString: 'Test2'
  //   } as Event,
  //   {title: 'title3', content: '3',
  //   media: [],
  //   status: 'published3',
  //   createdDate: new Date(2021, 4, 28),
  //   collection: [],
  //   isPinned: true,
  //   responsible: [],
  //   id: '3',
  //   testingString: 'Test3'
  //   } as Event,
  // ];

  getEvents(): Event[]{
    return this.eventList;
  }
  addEvent(event: Event): Event {
    return event;
  }
  deleteEvent(id: any): void {
    // implementation needed. 
  }
// =======


//    getEvents(): Event[] {
//      return this.eventList;
//    }
// >>>>>>> 919be0753092c854c142956d6f47484da92d20c3
}
