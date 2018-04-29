import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {GetRandomEmailsService} from './get-random-emails.service';
import {HttpModule} from '@angular/http';
import { EmailsEditorComponent } from './emails-editor/emails-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    EmailsEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [GetRandomEmailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
