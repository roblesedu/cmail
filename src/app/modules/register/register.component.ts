import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormValidate } from "src/app/utils/formValidate";
import { map, catchError } from "rxjs/operators";
import { Observable } from 'rxjs';
import { RegisterService } from 'src/app/services/register.services';

@Component({
  selector: 'cmail-register',
  templateUrl: './register.component.html',
  styles: []
})

export class RegisterComponent implements OnInit {

  //é possível usar o Validators do Angular 
  name = new FormControl('', Validators.required);
  username = new FormControl('', [Validators.required, Validators.minLength(3)]);
  password = new FormControl('', Validators.required);
  phone = new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]);
  avatar = new FormControl('', Validators.required, this.validateImage.bind(this)); //o this muda de contexto.O bind redefine para o this do avatar

  registerForm = new FormGroup({
    name: this.name,
    username: this.username,
    password: this.password,
    avatar: this.avatar,
    phone: this.phone
  }, {updateOn: 'blur'}) //updateOn faz com que seja disparado no onBlur

  registerMessage = '';

  //é possível passar uma instância do angular no constructor numa propriedade
  constructor(private service: RegisterService, private route: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  //é possível ter o "controle" na função, sendo assim, não precisa declarar como const dependente de único campo
  //o retorno do Observable pode ser um erro ou retornar null (o angular entende o null como válido)
  validateImage(controle: AbstractControl): Observable<ValidationErrors | null> {
    const url = controle.value;

    //head só retorna o status 200
    //pipe retorna um observable definido no head
    return this.http.head(url,{observe: 'response'}).pipe(
                map((response) => {
                  if(response.ok) {
                    //https://avatars1.githubusercontent.com/u/2079776?s=460&v=4
                    console.warn("deu certo");
                    console.log(response);

                    return null
                  } else {
                    console.warn("error");
                    console.log(response);
                    
                    let error = {
                      invalidUrl: "A URL é inválida"
                    }

                    return error;
                  }
                }),
                catchError((response) => {
                  //https://www.infoescola.com/wp-content/uploads/2008/05/capivara-119654188.jpg
                  console.log("caiu no catch error");
                  console.log(response.status);
                  

                  let errorMsg = {
                    invalidUrl: "URL com bloqueio de CORS",
                    status: response.status
                  }

                  return [errorMsg];
                })
              )
  }

  registerSubmit() {
    if(this.registerForm.invalid) {
      FormValidate.validateForm(this.registerForm);
      return;
    }

    this.service.register(this.registerForm.value).subscribe(
      (response: any) => {
        console.log(response)
        this.registerMessage = 'Usuário cadastrado com sucesso';
        this.registerForm.reset();
        this.route.navigate(['login' ,this.registerForm.get('name')]);
      },
      (error) => {
        console.log(error);
      },
      () => {
        //complete
        console.log("sucesso");
      }
    )
  }
}
