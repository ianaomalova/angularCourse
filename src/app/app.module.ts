import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MultByPipe} from "./pipes/mult-by.pipe";
import { ExMultPipe } from './pipes/ex-mult.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MultByPipe,
    ExMultPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
