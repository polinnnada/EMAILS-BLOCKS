import {Component, Input, Output, OnInit, EventEmitter, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-emails-editor',
  templateUrl: './emails-editor.component.html',
  styleUrls: ['./emails-editor.component.css']
})
export class EmailsEditorComponent implements OnInit {

  private _emails = [];
  @Input('email') email = '';
  @Output() adding = new EventEmitter<number>();

  constructor(cd: ChangeDetectorRef) {
  }


  ngOnInit() {
    if (this.email) {
      this.add(this.email);
    }
  }

  get emails(): any {
    this.adding.emit(this._emails.length);
    return this._emails;
  }

  add(email: string) {
    if (email && email.trim()) {
      this._emails.push(email);
      this.email = '';
      // запускаем событие изменения количества емейлов
      this.adding.emit(this._emails.length);
    }
  }

  delete(email: string) {
    const index = this._emails.indexOf(email);
    this._emails.splice(index, 1);
    // запускаем событие изменения количества емейлов
    this.adding.emit(this._emails.length);
  }

  isValid() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.email).toLowerCase());
  }

  onKeyDown(event: KeyboardEvent) {
    if (['Enter', 'Comma'].includes(event.code)
    ) {
      this.add((<HTMLInputElement>event.target).value);
      (<HTMLInputElement>event.target).value = '';
      return false;
    }
  }

  onInput(event: any, value: string) {
    if (event.inputType === 'insertFromPaste') {
      this.add(value);
      console.log(this.email);
      // return '';
    } else {
      // this.value = value;
    }
  }

  onBlur(event: KeyboardEvent) {
    this.add(this.email);
  }

  onChange(value: string) {
    this.add(value);
  }

}

