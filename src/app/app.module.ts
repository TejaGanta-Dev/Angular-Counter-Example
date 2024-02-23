import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { ButtonsComponent } from './counter/buttons/buttons.component';
import { OutputComponent } from './counter/output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonsComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
