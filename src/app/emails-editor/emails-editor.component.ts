import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-emails-editor',
  templateUrl: './emails-editor.component.html',
  styleUrls: ['./emails-editor.component.css']
})
export class EmailsEditorComponent implements OnInit {

  private _emails = [];
  @Input() email = null;
  @Output() count_changing = new EventEmitter<number>();
  constructor() {
  }

  ngOnInit() {
    if (this.email) {
      this.add(this.email);
    }
  }

  get emails(): any {
    this.count_changing.emit(this._emails.length);
    return this._emails;
  }

  add(email: string) {
    if (email && email.trim()) {
      this.email = null;
      this._emails.push(email);
      // запускаем событие изменения количества емейлов
      this.count_changing.emit(this._emails.length);
    }
  }

  delete(email: string) {
    const index = this._emails.indexOf(email);
    this._emails.splice(index, 1);
    // запускаем событие изменения количества емейлов
    this.count_changing.emit(this._emails.length);
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
    this.add(this.email);
  }

}

