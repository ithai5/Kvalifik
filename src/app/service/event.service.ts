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


 
  getEventList(): any{
    return this.httpClient.get(this.dbAccess("Events", this.ngRedux.getState().userState.userToken), this.getHttpHeader())
  }
  
  createEvent(newEvent: Event): void {
    this.httpClient.post(this.dbAccess("Events", this.ngRedux.getState().userState.userToken), newEvent, this.getHttpHeader()).subscribe();
  }
  updateEvent(event: Event): void { 
    this.httpClient.patch(this.dbAccess(`Events/${event.id}`, this.ngRedux.getState().userState.userToken), event, this.getHttpHeader()).subscribe();
  }
  deleteEvent(event: Event): void{
    this.httpClient.delete(this.dbAccess(`Events/${event.id}/`, this.ngRedux.getState().userState.userToken), this.getHttpHeader()).subscribe();
    //return this.events.splice(this.events.indexOf(this.getEventById(id)), 1)[0];
  }

  // TODO: Can potentially be moved to some other place at some other time :)
  //uploadPictureToAPI(imgPath: string): any{
    //const apiURL: string = 'https://api.imgbb.com/1/upload?key=73a7cdce0b5d789489867d977f6bcb7a&image=' + imgPath;
    //console.log('boop!')
    //console.log(this.httpClient.post<any>(apiURL, imgPath, this.httpOptions).subscribe());
  //}

}
