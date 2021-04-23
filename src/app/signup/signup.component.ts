import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor() {   }

  ngOnInit(): void {
  }
  f(): object{ return this.user.controls; }

  onSubmit(): void{
    console.log(this.user);
  }
  matchPasswords(): boolean{
    console.log(this.f);
    return (this.user.value.password === this.user.value.reEnterPassword);
  }
}
