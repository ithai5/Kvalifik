import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }

  getHttpHeader (){
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
  }
  dbAccess (list, auth): string {
     return  `${environment.firebase.databaseURL}/${list}.json?auth=${auth}`;
  }
}

