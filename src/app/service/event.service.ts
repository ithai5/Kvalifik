import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { DataService } from './data.service';
import { Event } from '../entities/event';
import {ApiService} from './api.service';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../redux/state/appState';

@Injectable({
  providedIn: 'root'
})
export class EventService extends ApiService{
  private events: Event[] = [];
  private httpOptions= {
    headers: new HttpHeaders({'content-type': 'application.json'})
  }

  constructor(private httpClient: HttpClient, private ngRedux: NgRedux<AppState>) {
    super();
  }


  //load post from Firebase
  /* getPostList(): any {
    return this.httpClient.get(this.dbAccess("Posts",this.ngRedux.getState().userState.userToken), this.getHttpHeader());
  } */
  getEventList(): any{
    return this.httpClient.get(this.dbAccess("Events", this.ngRedux.getState().userState.userToken), this.getHttpHeader())
  }
  getEventById(id: any): Event{
    return this.events.find((event) => event.id === id);
  }
  createEvent(newEvent: Event): Event {
    newEvent.id = this.events.length + 1;
    this.events.push(newEvent);
    return newEvent;
  }
  updateEvent(id: any, updateInfo: Event): Event { // Can't pass in the event itself?
    const eventToUpdate = this.getEventById(id);
    const keyList = Object.keys(updateInfo); // Don't know what this is, check up on it.
    keyList.forEach((key) => eventToUpdate[key] = updateInfo[key])
    return eventToUpdate;
  }
  deleteEvent(id: any): Event{
    return this.events.splice(this.events.indexOf(this.getEventById(id)), 1)[0];
  }

  // TODO: Can potentially be moved to some other place at some other time :)
  uploadPictureToAPI(imgPath: string): any{
    const apiURL: string = 'https://api.imgbb.com/1/upload?key=73a7cdce0b5d789489867d977f6bcb7a&image=' + imgPath;
    console.log('boop!')
    console.log(this.httpClient.post<any>(apiURL, imgPath, this.httpOptions).subscribe());
  }

}
