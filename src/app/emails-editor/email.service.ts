import {EventEmitter, Injectable} from '@angular/core';
import {Email} from './email.model';


@Injectable()
export class EmailService {

  onEmailAdded = new EventEmitter<Email>();
  onEmailDeleted = new EventEmitter<Email>();

  private _emails = [];

  constructor() {
  }

  getEmails() {
    return this._emails;
  }

  getEmailsCount() {
    return this._emails.length;
  }

  existEmail(email: Email) {
    return this._emails.find(em => em.value === email.value);
  }

  addEmailByText(email_text: string) {
    const email = new Email(email_text);
    return this.addEmail(email);
  }

  addEmail(email: Email) {
    if (!this.existEmail(email)) {
      this.onEmailAdded.emit(email);
      return this._emails.push(email);
    } else {
      // this.onEmailAdded.error('Existing element!');
      throw new Error('Existing element!');
    }
  }

  deleteEmail(email: Email) {
    if (this.existEmail(email)) {
      this.onEmailDeleted.emit(email);
      return this._emails.splice(this._emails.indexOf(email), 1);
    } else {
      // this.onEmailAdded.error('Element not found!');
      throw new Error('Element not found!');
    }
  }

}
