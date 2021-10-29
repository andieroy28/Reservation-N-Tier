import { Component, OnInit } from '@angular/core';
import { Contacts } from '../shared/contacts.model';
import { ContactsService } from '../shared/contacts.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styles: [
  ]
})

export class ReservationComponent implements OnInit {

  ngOnInit(): void {
  }

}




@Component({
  selector: 'app-contact-list',
  templateUrl: './reservation-list.component.html',
  styles: [
  ]
})
export class ContactListComponent implements OnInit {

  constructor(public service: ContactsService) { }
  

  ngOnInit(): void {
    this.service.refreshList();
  }

}




