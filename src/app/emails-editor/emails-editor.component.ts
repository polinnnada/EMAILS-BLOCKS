import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Email} from './email.model';
import {EmailService} from './email.service';

@Component({
  selector: 'app-emails-editor',
  templateUrl: './emails-editor.component.html',
  styleUrls: ['./emails-editor.component.css']
})
export class EmailsEditorComponent implements OnInit {

  private _emails: Email[] = [];
  @Input() id: string = null;
  email_text: string = null;

  constructor(private emailService: EmailService) {
  }

  ngOnInit() {
    this._emails = this.emailService.getEmails();
  }

  get emails(): any {
    // this._emails = this.emailService.getEmails();
    return this._emails;
  }

  add(email_text: string) {
    if (email_text && email_text.trim()) {
      try {
        this.emailService.addEmailByText(email_text);
        this.email_text = null;
        return true;
      } catch (e) {
        // alert(e);
      }
    }
    return false;
  }

  delete(email: Email) {
    try {
      this.emailService.deleteEmail(email);
    } catch (e) {
      alert(e);
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (['Enter', ','].includes(event.key)
    ) {
      if (this.add((<HTMLInputElement>event.target).value)) {
        event.preventDefault();
      }
    }
  }

  onPaste(event) {
    if (this.add(event.clipboardData.getData('text'))) {
      event.preventDefault();
    }
  }

  onBlur() {
    this.add(this.email_text);
  }

}

