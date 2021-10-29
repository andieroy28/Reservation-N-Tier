import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactList } from './contact/contact-form/contact-form.component';
import { ContactForm } from './contact/contact-form/contact-form.component';

//const routes: Routes = [];
const routes: Routes = [
  { path: 'contact-list', component: ContactList },
  { path: 'contact-form', component: ContactForm },
  { path: '', redirectTo: '/contact-list', pathMatch: 'full' }, // redirect to `contact-list`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
