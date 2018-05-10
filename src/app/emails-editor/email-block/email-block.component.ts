import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-email-block',
  templateUrl: './email-block.component.html',
  styleUrls: ['./email-block.component.css']
})
export class EmailBlockComponent implements OnInit {

  @Input() email;
  @Output() isValid = true;
  @Output() deleting = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
    this.isValid = this.validityCheck();
  }

  validityCheck() {
    const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email_regex.test(String(this.email).toLowerCase());
  }

  delete() {
    this.deleting.emit(true);
  }
}
