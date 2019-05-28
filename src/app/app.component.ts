import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Email } from './models/Email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _isNewEmailFormOpen = false;

  email = new Email();

  //emailList = [];
  emailList: Email[] = []; //: sempre define o tipo da propriedade

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen;
  }

  validateForm(form) {
    for(let nameControl in form.controls) {
      form.controls[nameControl].markAsTouched();
    }
  }

  submitEmail(formEmail: NgForm) {
    if(formEmail.invalid) {
      this.validateForm(formEmail);
      return;
    }

    this.emailList.push(this.email);
    this.email = new Email(); //cria uma nova lista para trocar a ref. de memoria

    formEmail.reset();
  }
}
