import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LabolatorioComponent } from './labolatorio/labolatorio.component'; 


@NgModule({
  declarations: [
    AppComponent,
    LabolatorioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
