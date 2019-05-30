import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from '../models/dto/login';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()

export class LoginService {
    private endpoint = 'login';

    constructor(private http: HttpClient) {}

    authenticate({email, password}): Observable<Object> {

        const loginDto = new Login({email, password});

        return this.http
                    .post(environment.cmailApi + this.endpoint, loginDto)
                    .pipe(
                        map((response: any) => {
                            console.log(response);
                            localStorage.setItem('cmail',response.token);
                            localStorage.setItem('name',response.name);
                            localStorage.setItem('email',response.email);
                            localStorage.setItem('avatar',response.avatarUrl);

                            return response
                        })
                    );
    }
}