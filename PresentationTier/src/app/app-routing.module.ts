import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
//import { ReservationComponent } from './reservation/reservation.component';
// import { ContactComponent } from './contact/contact.component';
// import { ContactListComponent } from './contact/contact-list/contact-list.component';
//import { ContactFormComponent } from './contact/contact-form/contact-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'reservations', pathMatch: 'full' },
  { path: 'reservations', component: ReservationListComponent },
  { path: 'create', component: ReservationFormComponent }
  //{path:'reservation-component',component:ReservationComponent, data : {title:'Title for Reservation Component'}},
  //{path:'contact-component',component:ContactComponent, data : {title:'Title for Contact Component'}},
  //{path:'reservation-component',component:ContactListComponent, data : {title:'Reservation List'}},
  //{ path: '',   redirectTo: '/reservation-component', pathMatch: 'full' }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
