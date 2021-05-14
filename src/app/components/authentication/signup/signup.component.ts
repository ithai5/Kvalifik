import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/entities/user';
import { UserActions } from 'src/app/redux/actions/userActions';

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

  constructor(private userActions: UserActions) {   }

  ngOnInit(): void {
  }
  f(): object{ return this.user.controls; }

  onSubmit(): void{
    console.log(this.user);
  }
  matchPasswords(): boolean{
    return (this.user.value.password === this.user.value.reEnterPassword);
  }
  passwordLength(): boolean{
    return this.user.value.password.length < 6
  }

  signup(): void {
    const userInfo = {
      username: this.user.value.username,
      firstName: this.user.value.firstName,
      lastName: this.user.value.lastName,
      email: this.user.value.email
    } as unknown as User;

    this.userActions.addUser(this.user.value, this.user.value.password);
  }
}
