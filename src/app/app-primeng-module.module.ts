import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CalendarModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [
    BrowserAnimationsModule,
    CalendarModule,
    ButtonModule,
    InputTextModule
  ]
})
export class AppPrimengModuleModule { }
