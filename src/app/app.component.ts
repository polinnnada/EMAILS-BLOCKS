import {Component, OnInit, Input, Inject, forwardRef} from '@angular/core';
import {GetRandomEmailsService} from './get-random-emails.service';
import {EmailsEditorComponent} from './emails-editor/emails-editor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetRandomEmailsService, EmailsEditorComponent]
})

export class AppComponent implements OnInit {

  @Input() init_emails = [];
  @Input() emails_editor = new EmailsEditorComponent();
  new_email = '';
  emails_count = 0;

  constructor(private getRandomEmailsService: GetRandomEmailsService) {
  }

  ngOnInit() {
    this.getRandomEmailsService.getEmails(10).subscribe(emails => {
      emails.forEach(email => {
        this.init_emails.push(email);
      });
    });
  }

  alertEmailsCount() {
    alert(this.emails_count);
  }

  onEmailsCountChange(count: number) {
    this.emails_count = count;
  }

  addRandomEmail() {
    this.getRandomEmailsService.getEmails(1).subscribe(email => {
      if (email.length > 0) {
        this.new_email = email[0];
      }
    });
  }
}
