import { Component, OnInit } from '@angular/core';
import { Reservation, ReservationService } from 'src/services/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styles: [
  ]
})
export class ReservationListComponent implements OnInit {
  constructor(public service: ReservationService) { }
  

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: Reservation) {
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
