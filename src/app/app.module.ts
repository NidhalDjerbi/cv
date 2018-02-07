import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DetailComponent } from './detail/detail.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DetailComponent,
    CvComponent,
    ListeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
