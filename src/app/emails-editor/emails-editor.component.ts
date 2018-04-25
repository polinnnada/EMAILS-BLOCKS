import {Component, Injectable, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-emails-editor',
  templateUrl: './emails-editor.component.html',
  styleUrls: ['./emails-editor.component.css']
})
@Injectable()
export class EmailsEditorComponent implements OnInit {

  @Input() _emails = [];
  @Input() email = '';
  @Output() adding = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {

  }

  get emails(): any {
    return this._emails;
  }


  addEmail(email: string) {
    if (email && email.trim()) {
      this._emails.push(email);
      this.email = '';
      // запускаем событие изменения количества емейлов
      this.adding.emit(this._emails.length);
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (['Enter', 'Comma'].includes(event.code)
    // || ['KeyV'].includes(event.code) && event.ctrlKey
    ) {
      this.addEmail((<HTMLInputElement>event.target).value);
      (<HTMLInputElement>event.target).value = '';
      return false;
    }
  }

  onInput(event: any, value: string) {
    if (event.inputType === 'insertFromPaste') {
      this.addEmail(value);
      console.log(this.email);
      // return '';
    } else {
      // this.value = value;
    }
  }

  onBlur(event: KeyboardEvent) {
    this.addEmail(this.email);
  }

  onChange(value: string) {
    this.addEmail(value);
  }

}

