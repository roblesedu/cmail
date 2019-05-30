export class Login {
    email = '';
    password = '';

    constructor({email, password}: {email: string, password: string}) {
      this.email = email;
      this.password = password;
    }
}