import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserPost } from 'src/app/models/dto/user-register-post';
import { FormValidate } from "src/app/utils/formValidate";
import { map, catchError } from "rxjs/operators";
import { Observable } from 'rxjs';

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
  })

  registerMessage = '';

  //é possível passar uma instância do angular no constructor numa propriedade
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  validateImage(): Observable<ValidationErrors> {
    const url = this.avatar.value;

    //head só retorna o status 200
    //pipe retorna um observable definido no head
    return this.http.head(url,{observe: 'response'}).pipe(
                map((response) => {
                  console.log(response.ok);
                  return [response.ok] ? null : {invalidUrl : true}
                }),
                catchError((error) => {
                  return [{invalidUrl: true}]
                })
              )
  }

  registerSubmit() {
    if(this.registerForm.invalid) {
      FormValidate.validateForm(this.registerForm);
      return;
    }

    let userDataApi = new UserPost(this.registerForm.value)

    this.http.post('http://localhost:3200/users',userDataApi).subscribe(
      (response) => {
        console.log(response)
        this.registerMessage = 'Usuário cadastrado com sucesso';
      },
      (error) => {
        console.log(error);
      },
      () => {
        //complete
        console.log("sucesso");
        this.registerForm.reset();

        setTimeout(()=>{
          this.registerMessage = ' ';
        },3000)
      }
    )
  }
}
