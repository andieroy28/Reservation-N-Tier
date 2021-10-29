import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactFormComponent,
    HeaderComponent,
    ContactListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
