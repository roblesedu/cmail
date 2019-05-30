import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  submitLogin(loginForm: NgForm) {
    if(loginForm.valid) {
      console.log(this.login);
    }
  }
}
