import {Component, OnInit} from '@angular/core';
import {GetRandomEmailsService} from './get-random-emails.service';
import {EmailService} from './emails-editor/email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetRandomEmailsService]
})

export class AppComponent implements OnInit {

  new_email = '';
  emails_count = 0;

  constructor(private getRandomEmailsService: GetRandomEmailsService,
              private emailService: EmailService) {
  }

  ngOnInit() {
    this.new_email = 'sidorov@gmail.com';
    // this.init_emails.push('sidorov@gmail.com');
  }

  alertEmailsCount() {
    // alert(this.emails_count);
    alert(this.emailService.getEmailsCount());
  }

  onEmailsCountChange(count: number) {
    this.emails_count = count;
  }

  addRandomEmail() {
    let new_email = '';
    this.getRandomEmailsService.getEmails(1).subscribe(email => {
      if (email.length > 0) {
        new_email = email[0];
      }
    });

    if (!new_email) {
      new_email = this.getRandomEmailsService.getLocalEmail();
    }

    this.emailService.addEmailByText(new_email);
  }
}
