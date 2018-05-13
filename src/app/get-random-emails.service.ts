import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetRandomEmailsService {
  local_emails = [
    {value : 'bogjobber@gmail.com'},
    {value : 'pierce@yahoo.com'},
    {value : 'gmcgath@live.com'},
    {value : 'sinkou@icloud.com'},
    {value : 'bhima@me.com'},
    {value : 'crandall@outlook.com'},
    {value : 'chaki@att.net'},
    {value : 'krueger@gmail.com'},
    {value : 'kannan@outlook.com'},
    {value : 'hillct@yahoo.ca'},
    {value : 'reeds@gmail.com'},
    {value : 'csilvers@yahoo.ca'},
    {value : 'floxy@gmail.com'},
    {value : 'henkp@yahoo.ca'},
    {value : 'mgemmons@msn.com'},
    {value : 'parents@gmail.com'},
    {value : 'privcan@outlook.com'},
    {value : 'sonnen@aol.com'},
    {value : 'fhirsch@verizon.net'},
    {value : 'dpitts@sbcglobal.net'},
  ];

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

  getLocalEmail() {
    let local_index = Math.floor(Math.random() * 20);
    console.log(local_index);
    return this.local_emails[local_index].value;
  }


}
