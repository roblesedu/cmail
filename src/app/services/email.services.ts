import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Email } from '../models/Email';
import { environment } from 'src/environments/environment';
import { EmailPost } from '../models/dto/email-post';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { EmailGet } from '../models/dto/email-get';
import { Observable } from 'rxjs';

@Injectable()
export class EmailService {

  private _endpoint = 'emails/';
  private headers = {
    headers: new HttpHeaders({
      'Authorization': localStorage.getItem('cmail-token')
    })
  };

  constructor(private http: HttpClient) { }

  submitEmailService(getForm: Email): Observable<Email> {

    const emailDto = new EmailPost(getForm)

    return this.http
                .post<EmailPost>(
                  environment.cmailApi + this._endpoint
                  ,emailDto
                  ,this.headers
                )
                .pipe<Email>(
                  map(englishEmail => new EmailGet(englishEmail))
                )

  }

  getEmailList(): Observable<Email[]>{
    
    return this.http
                .get<EmailPost[]>(environment.cmailApi+this._endpoint,this.headers)
                .pipe(
                  map(
                    (emailList) => emailList.map(emailApi => new EmailGet(emailApi))
                  )
                )
  }

  deleteEmailList(id: string): Observable<Object> {
    return this.http.delete(environment.cmailApi+this._endpoint+id, this.headers)
  }
} 