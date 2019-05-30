import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormValidate } from 'src/app/utils/formValidate';
import { LoginService } from 'src/app/services/login.services';

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

  constructor(private service: LoginService, private route: Router) { }

  ngOnInit() {
  }

  submitLogin(loginForm: NgForm) {
    if(loginForm.invalid) {
      FormValidate.validateForm(loginForm);
      return;
    }

    this.service.authenticate(this.login)
        .subscribe(
          (response: any) => {
            console.log(response);
            
            this.route.navigate(['inbox']);
          }
      )
  }
}
