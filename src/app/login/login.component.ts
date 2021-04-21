import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private httpOptions = {
    headers: new HttpHeaders({'content-Type': 'application.json'})
  }

  loginInfo = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  tryLogin(): any {
    const apiToken: string = "";
    const apiURL: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + apiToken;
    
    const userDetails: any = {
      email: this.loginInfo.value.email,
      password: this.loginInfo.value.password,
      returnSecureToken: true,
    };
    console.log(userDetails);
    
    return this.httpClient.post<any>(apiURL, userDetails, this.httpOptions)
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
