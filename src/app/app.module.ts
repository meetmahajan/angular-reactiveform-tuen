import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormDetailsComponent } from './form-details/form-details.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, ReactiveFormComponent, FormDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
