import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Email } from '../../models/Email';
import { FormValidate } from "src/app/utils/formValidate";

@Component({
  selector: 'cmail-inbox',
  templateUrl: './inbox.component.html',
  styles: []
})
export class InboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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

  submitEmail(formEmail: NgForm) {
    if(formEmail.invalid) {
      FormValidate.validateForm(formEmail);
      return;
    }

    this.emailList.push(this.email);
    this.email = new Email(); //cria uma nova lista para trocar a ref. de memoria

    formEmail.reset();

    this.toggleNewEmailForm();
  }
}
