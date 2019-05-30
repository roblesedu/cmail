import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { UserPost } from '../models/dto/user-register-post';

@Injectable()

export class RegisterService {
    private endpoint = 'users';

    constructor(private http: HttpClient) {}

    register(registerInfo: {name:any, username:any, phone:any, password:any, avatar:any}) {

        const registerDto = new UserPost(registerInfo);

        return this.http.post(environment.cmailApi+this.endpoint, registerDto);
    }
}