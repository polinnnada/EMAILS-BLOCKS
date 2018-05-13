import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Email} from '../email.model';

@Component({
  selector: 'app-email-block',
  templateUrl: './email-block.component.html',
  styleUrls: ['./email-block.component.css']
})
export class EmailBlockComponent implements OnInit {

  @Input() email: Email;
  @Output() deleting = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  delete() {
    this.deleting.emit(true);
  }
}
