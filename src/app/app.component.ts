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

  constructor(private getRandomEmailsService: GetRandomEmailsService,
              private emailService: EmailService) {
  }

  ngOnInit() {
    this.emailService.addEmailByText('sidorov@gmail.com');
  }

  alertEmailsCount() {
    alert(this.emailService.getEmailsCount());
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
