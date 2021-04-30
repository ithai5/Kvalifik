import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
}

