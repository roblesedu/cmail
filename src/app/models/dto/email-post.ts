import { Email } from '../Email';

export class EmailPost{
    to = '';
    subject = '';
    content = '';
    created_at = '';
    id = '';

    constructor(email: Email){
        this.to = email.recepient;
        this.subject = email.subject;
        this.content   = email.message;
        this.id = email.id;
    }
} 