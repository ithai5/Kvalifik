import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {UserActions} from '../../../redux/actions/userActions';
import {AuthService} from '../../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private httpOptions = {
    headers: new HttpHeaders({'content-Type': 'application.json'})
  };

  loginInfo = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private httpClient: HttpClient, private userActions: UserActions, private router: Router) { }

  ngOnInit(): void {
  }

  login() : void {
    const userDetails = {
      email: this.loginInfo.value.email,
      password: this.loginInfo.value.password,
      returnSecureToken: true,
    }
    this.userActions.login(userDetails)
    setTimeout(() => {
      this.router.navigate(["postList"]);
    }, 5000);
  }

}
