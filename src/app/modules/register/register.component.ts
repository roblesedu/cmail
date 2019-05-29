import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserPost } from 'src/app/models/dto/user-register-post';

@Component({
  selector: 'cmail-register',
  templateUrl: './register.component.html',
  styles: []
})

export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    avatar: new FormControl(),
    phone: new FormControl()
  })

  registerMessage = '';

  //é possível passar uma instância do angular no constructor numa propriedade
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  registerSubmit() {
    if(this.registerForm.invalid) return;

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
