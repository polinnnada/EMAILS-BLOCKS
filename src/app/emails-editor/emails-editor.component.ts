import {Component, Input, Output, OnInit, EventEmitter, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-emails-editor',
  templateUrl: './emails-editor.component.html',
  styleUrls: ['./emails-editor.component.css']
})
export class EmailsEditorComponent implements OnInit {

  private _emails = [];
  @Input() email = null;
  @Output() adding = new EventEmitter<number>();
  constructor() {
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
      this.email = '';
      this._emails.push(email);
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
      (<HTMLInputElement>event.target).value = '';
      // event.stopPropagation();
      // // event.preventDefault();
      // return true;
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

