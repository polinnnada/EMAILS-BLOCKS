import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-email-block',
  templateUrl: './email-block.component.html',
  styleUrls: ['./email-block.component.css']
})
export class EmailBlockComponent implements OnInit {

  @Input() email;
  private _isValid = true;

  constructor() {
  }

  ngOnInit() {
  }

  get isValid() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.email).toLowerCase());
  }

}
