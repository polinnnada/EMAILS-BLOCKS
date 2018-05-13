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
  @Input() email_text: string = null;
  @Output() count_changing = new EventEmitter<number>();

  constructor(private emailService: EmailService) {
  }

  ngOnInit() {
    // this._emails = this.emailService.getEmails();
    // обновляем список при добавлении емейлов
    this.emailService.onEmailAdded.subscribe(
      (email: Email) => this._emails.push(email),
      (error) => alert(error)
    );
    // обновляем список при удалении емейлов
    this.emailService.onEmailDeleted.subscribe(
      (email: Email) => {
        // this.delete(value);
        const index = this._emails.indexOf(email);
        this._emails.splice(index, 1);
      },
      (error) => alert(error)
    );


    // инициализация списка
    if (this.email_text) {
      this.add(this.email_text);
    }

  }

  get emails(): any {
    return this._emails;
  }

  add(email_text: string) {
    if (email_text && email_text.trim()) {
      try {
        this.emailService.addEmail(new Email(email_text));
        this.email_text = null;
        // запускаем событие изменения количества емейлов
        this.count_changing.emit(this._emails.length);
      } catch (e) {
        // alert(e);
      }
    }
  }

  delete(email: Email) {
    try {
      this.emailService.deleteEmail(email);
      // запускаем событие изменения количества емейлов
      this.count_changing.emit(this._emails.length);
    } catch (e) {
      alert(e);
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (['Enter', 'Comma'].includes(event.code)
    ) {
      this.add((<HTMLInputElement>event.target).value);
      event.preventDefault();
    }
  }

  onPaste(event) {
    this.add(event.clipboardData.getData('text'));
    event.preventDefault();
  }

  onBlur() {
    this.add(this.email_text);
  }

}

