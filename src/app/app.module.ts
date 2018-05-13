import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GetRandomEmailsService } from './get-random-emails.service';
import {HttpModule} from '@angular/http';
import { EmailsEditorModule } from './emails-editor/emails-editor.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    EmailsEditorModule
  ],
  providers: [GetRandomEmailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
