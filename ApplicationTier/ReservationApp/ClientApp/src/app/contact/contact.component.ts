import { Component, OnInit } from '@angular/core';
//import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Contacts } from '../shared/contacts.model';
import { ContactsService } from '../shared/contacts.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit {

  

  constructor(public service: ContactsService) { }
  

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: Contacts) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    this.service.deleteContact(id)
      .subscribe(
        res => {
          this.service.refreshList();
        },
        err => { console.log(err) }
      )
  }
}

