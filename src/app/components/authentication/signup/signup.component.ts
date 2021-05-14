import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new FormGroup({
    username : new FormControl('', Validators.required),
    firstName : new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.email, Validators.required]),
    password : new FormControl('', Validators.required),
    reEnterPassword : new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService) {   }

  ngOnInit(): void {
  }
  f(): object{ return this.user.controls; }

  onSubmit(): void{
    console.log(this.user);
  }
  matchPasswords(): boolean{
    return (this.user.value.password === this.user.value.reEnterPassword);
  }

  signup(): void {
    const signupInfo = {
      email: this.user.value.email,
      password: this.user.value.password,
      returnSecureToken: true,
    };

    this.authService.signup(signupInfo);
  }
}
