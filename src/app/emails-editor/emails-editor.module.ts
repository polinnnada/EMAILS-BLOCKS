import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { EmailService } from './email.service';
import { EmailBlockComponent } from './email-block/email-block.component';
import { EmailsEditorComponent } from './emails-editor.component';


@NgModule({
  declarations: [
    EmailBlockComponent,
    EmailsEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    EmailsEditorComponent,
  ],
  providers: [EmailService],
  bootstrap: [EmailsEditorComponent]
})
export class EmailsEditorModule { }
