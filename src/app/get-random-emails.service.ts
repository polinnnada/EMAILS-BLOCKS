import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetRandomEmailsService {

  constructor(private http: Http) { }

  getEmails(count) {
    return this.http.get('https://randomuser.me/api/?inc=value&results=' + count)
      .map(response => response.json())
      .map(response => response.results)
      .map(emails => {
        return emails.map(e => {
          return e.value;
        });
      })
      ;
  }

  // emails = [
  //   {value : '123@bisys'},
  //   {value: '567@ru'}
  // ];

}
