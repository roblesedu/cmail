import { EmailPost } from './email-post';

export class EmailGet {

  recepient = '';
  subject = '';
  message = '';
  created_at = '';
  id = '';

  constructor(englishEmail: EmailPost) {

    this.recepient = englishEmail.to;
    this.subject = englishEmail.subject;
    this.message = englishEmail.content;
    this.created_at = englishEmail.created_at;
    this.id = englishEmail.id;
  }

} 