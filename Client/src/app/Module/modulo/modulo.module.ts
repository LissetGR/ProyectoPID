import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AccordionModule } from 'primeng/accordion';
import { InputMaskModule } from 'primeng/inputmask';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  exports:[
    ButtonModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    InputTextModule,
    PasswordModule,
    AccordionModule,
    InputMaskModule,
    RadioButtonModule,
    SelectButtonModule,
    FormsModule,
    InputNumberModule,
    CalendarModule,
    MessagesModule,
    ToastModule
  ],
  imports: [
    CommonModule,
    DynamicDialogModule,
    PasswordModule,
    ToastModule

  ]
})
export class ModuloModule { }
