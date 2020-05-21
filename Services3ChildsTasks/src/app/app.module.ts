import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildInputComponent } from './child-input/child-input.component';
import { ChildAlertInputComponent } from './child-alert-input/child-alert-input.component';
import { ChildAlertCntComponent } from './child-alert-cnt/child-alert-cnt.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildInputComponent,
    ChildAlertInputComponent,
    ChildAlertCntComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
