import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {GetRandomEmailsService} from './get-random-emails.service';
import {HttpModule} from '@angular/http';
import { EmailsEditorComponent } from './emails-editor/emails-editor.component';
import { EmailBlockComponent } from './emails-editor/email-block/email-block.component';


@NgModule({
  declarations: [
    AppComponent,
    EmailsEditorComponent,
    EmailBlockComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [GetRandomEmailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
