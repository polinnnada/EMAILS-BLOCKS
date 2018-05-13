import {Component, OnInit} from '@angular/core';
import {GetRandomEmailsService} from './get-random-emails.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetRandomEmailsService]
})

export class AppComponent implements OnInit {

  new_email = '';
  emails_count = 0;

  constructor(private getRandomEmailsService: GetRandomEmailsService) {
  }

  ngOnInit() {
    this.new_email = 'sidorov@gmail.com';
    // this.init_emails.push('sidorov@gmail.com');
  }

  alertEmailsCount() {
    alert(this.emails_count);
  }

  onEmailsCountChange(count: number) {
    this.emails_count = count;
  }

  addRandomEmail(id: string) {
    // const emails_editor: HTMLElement = document.getElementById(id);
    this.getRandomEmailsService.getEmails(1).subscribe(email => {
      if (email.length > 0) {
        this.new_email = email[0];
        // emails_editor.setAttribute('ng-reflect-value', value[0]);
        // emails_editor.setAttribute('value', value[0]);
        // emails_editor.focus();
        // emails_editor.blur();
      }
    });
  }
}
