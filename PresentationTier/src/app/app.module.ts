import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ReservationComponent } from './reservation/reservation.component';
//import { ContactComponent } from './contact/contact.component';
//import { ContactListComponent } from './contact/contact-list/contact-list.component';
//import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { HeaderComponent } from './header/header.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    //ReservationComponent,
    //ContactComponent,
    //ContactListComponent,
    //ContactFormComponent,
    HeaderComponent,
    ReservationListComponent,
    ReservationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
