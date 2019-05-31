import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Email } from '../../models/Email';
import { FormValidate } from "src/app/utils/formValidate";
import { EmailService } from 'src/app/services/email.services';

@Component({
  selector: 'cmail-inbox',
  templateUrl: './inbox.component.html',
  styles: []
})
export class InboxComponent implements OnInit {

  private _isNewEmailFormOpen = false;
  email = new Email();
  //emailList = [];
  emailList: Email[] = []; //: sempre define o tipo da propriedade
  filterText = '';

  constructor(private service: EmailService) { }

  ngOnInit() {    
    this.renderListEmail();
  }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }
  
  renderListEmail() {
    this.service.getEmailList()
                .subscribe(
                  emailListApi => {
                    this.emailList = emailListApi;
                  }
                )
  }

  deleteEmail(id: string){
    console.log('apagou cx entrada');
    this.service.deleteEmailList(id)
    .subscribe((res)=>{
      
      //alternativa caso queira pegar sempre do banco de dados;
      //this.listarEmails();
      
      this.emailList = this
                        .emailList
                        .filter(email => email.id != id)

    }
    ,erro => console.log(erro)
    )
    
    //remover o email da lista e da API (implementar um serviço de remoção)
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen;
  }

  submitEmail(formEmail: NgForm) {
    if(formEmail.invalid) {
      FormValidate.validateForm(formEmail);
      return;
    }

    this.service.submitEmailService(this.email)
                .subscribe(
                  emailApi => {
                    this.emailList.push(emailApi);
                    this.email = new Email(); //cria uma nova lista para trocar a ref. de memoria
                    formEmail.reset();
                    this.toggleNewEmailForm();
                  }
                )
  }

  filterEmailList() {

    //return retorna a lista filtrada
    return this.emailList = this.emailList.filter( email => {
      if(email.recepient.toLowerCase().includes(this.filterText) 
        || email.subject.toLowerCase().includes(this.filterText)
        || email.message.toLowerCase().includes(this.filterText)) {
      } {
        return email
      }
    })
  }
}
